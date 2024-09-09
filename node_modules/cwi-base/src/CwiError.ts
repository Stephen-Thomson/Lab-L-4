/**
 * Errors which extend CwiError implement `name` as an alternate getter for `code`,
 * and `message` as an alternate getter for `description`.
 *
 * This supports catch handlers that might catch both
 * `Error` derived or `CwiErrorBase` derived errors.
 *
 * Derived class constructors should use the derived class name as the value for `code`,
 * and an internationalizable constant string for `description`.
 *
 * If a derived class intends to wrap another CwiError, the public property should
 * be named `cwiError` and will be recovered by `fromUnknown`.
 * 
 * Optionaly, the derived class `description` can include template parameters passed in
 * to the constructor. See ERR_MISSING_PARAMETER for an example.
 *
 * To avoid derived class name colisions, packages should include a package specific
 * identifier after the 'ERR_' prefix. e.g. 'ERR_DOJO_' as the prefix for Dojo specific error
 * classes.
 */
export class CwiError extends Error {

  constructor (code: string, description: string, stack?: string, public details?: Record<string, string>) {
    super(description)
    this.name = code
    if (stack) this.stack = stack
  }

  // toString (): string { return `${this.code}: ${this.description}` }

  /**
   * Recovers all public fields from CwiError derived error classes and relevant Error derived errors.
   * 
   * Critical client data fields are preserved across HTTP DojoExpress / DojoExpressClient encoding.
   */
  static fromUnknown (err: unknown): CwiError {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let code = 'ERR_UNKNOWN'
    let description = ''
    let stack: string | undefined
    const details: Record<string, string> = {}
    if (err !== null && typeof err === 'object') {
      code = err["code"] || err["name"] || err["status"] || "ERR_UNKNOWN"
      if (typeof code !== 'string') code = "ERR_UNKNOWN"

      description = err["description"] || err["message"] || ''
      if (typeof description !== 'string') description = "ERR_UNKNOWN"

      if (typeof err["stack"] === 'string') stack = err["stack"]

      if (typeof err["sql"] === 'string') details.sql = err["sql"]
      if (typeof err["sqlMessage"] === 'string') details.sqlMessage = err["sqlMessage"]
    }
    const e = new CwiError(
      code,
      description,
      stack,
      Object.keys(details).length > 0 ? details : undefined
    )
    if (err !== null && typeof err === 'object') {
      for (const [key, value] of Object.entries(err)) {
        if (key !== 'cwiError' && typeof value !== 'string' && typeof value !== 'number' && !Array.isArray(value))
          continue
        switch (key) {
          case 'cwiError':
            e[key] = CwiError.fromUnknown(value);
            break
          case 'status': break
          case 'name': break
          case 'code': break
          case 'message': break
          case 'description': break
          case 'stack': break
          case 'sql': break
          case 'sqlMessage': break
          default:
            e[key] = value;
            break
        }
      }
    }
    return e
  }

  /**
     * Error class compatible accessor for  `code`.
     */
  get code (): string { return this.name }
  set code (v: string) { this.name = v }

  /**
     * Error class compatible accessor for `description`.
     */
  get description (): string { return this.message }
  set description (v: string) { this.message = v }

  /**
     * @returns standard HTTP error status object with status property set to 'error'.
     */
  asStatus (): { status: string, code: string, description: string } {
    return {
      status: 'error',
      code: this.code,
      description: this.description
    }
  }

  toJSON_old() : object {
    const json = {
      code: this.code,
      description: this.description,
    }
    if (this.stack) json["stack"] = this.stack
    if (this.details) json["details"] = this.details
    return json
  }
}

import { createAction, toBEEFfromEnvelope } from '@babbage/sdk-ts';
import { HelloTokens } from 'hello-tokens';

// Step 1: Create and submit the "Hello World" token
(async () => {
  try {
    // Step 1: Create the output script
    const outputScript = await HelloTokens.createOutputScript('Hello Blockchain!');

    // Step 2: Create a new action with the Babbage SDK
    const HWToken = await createAction({
      outputs: [{
        satoshis: 1,
        script: outputScript,
        description: "Hello World Token",
      }],
      description: "Creating Hello World Token"
    });

    // Check if the necessary fields (rawTx, inputs, txid) are available
    if (!HWToken.rawTx || !HWToken.inputs || !HWToken.txid) {
      throw new Error('Missing values in HWToken: rawTx, inputs, or txid');
    }

    // Step 3: Convert to BEEF format
    const beef = toBEEFfromEnvelope({
      rawTx: HWToken.rawTx,
      inputs: HWToken.inputs,
      txid: HWToken.txid
    }).beef;

    // Step 4: Submit the transaction to the overlay service
    const result = await fetch('https://staging-overlay.babbage.systems/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
        'X-Topics': JSON.stringify(['tm_helloworld'])
      },
      body: new Uint8Array(beef)
    });

    console.log('Transaction submitted successfully:', await result.json());

    // Step 5: Query the token state after successful submission
    await queryTokenState();

  } catch (error) {
    console.error('Error creating or submitting the Hello World token:', error);
  }
})();

// Step 2: Query the token state with a lookup service
const queryTokenState = async () => {
  try {
    // Query the token state from the overlay service
    const result = await fetch('https://staging-overlay.babbage.systems/lookup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service: 'ls_helloworld',
        query: 'Hello Blockchain!' // The original message as the query
      })
    });

    // Parse the lookup answer
    const lookupAnswer = await result.json();
    
    // Use HelloTokens to parse the message from the lookup answer
    const parsedMessage = await HelloTokens.parseLookupAnswer(lookupAnswer);
    
    // Print the parsed message to verify it matches the original message
    console.log('Parsed message from the token:', parsedMessage);
  } catch (error) {
    console.error('Error querying the token state:', error);
  }
};

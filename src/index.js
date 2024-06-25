console.log('Index.js is loaded');
import { BarretenbergBackend } from '@noir-lang/backend_barretenberg';
import { Noir } from '@noir-lang/noir_js';
import circuit from '../target/age_verification.json';

const MIN_AGE = 18;

async function main() {
    console.log('Starting main function');
    const backend = new BarretenbergBackend(circuit);
    console.log('Backend created');
    
    const noir = new Noir(circuit, backend);
    console.log('Noir instance created');
    
    const verifyButton = document.getElementById('verifyButton');
    const ageInput = document.getElementById('ageInput');
    const result = document.getElementById('result');

    verifyButton.addEventListener('click', async () => {
        const age = parseInt(ageInput.value, 10);
        console.log('Verifying age:', age);

        try {
            console.log('Executing noir...');
            const { returnValue } = await noir.execute({ age: age, min_age: MIN_AGE });
            console.log('Circuit execution result:', returnValue);

            if (returnValue) {
                result.textContent = `Age verification successful. You are ${age} years old and meet the minimum age requirement.`;
            } else {
                result.textContent = `Age verification failed. You must be at least ${MIN_AGE} years old.`;
            }
        } catch (error) {
            console.error('Error during verification:', error);
            console.error('Error stack:', error.stack);
            result.textContent = `An error occurred during verification. Error: ${error.message}`;
        }
    });
}

console.log('Before main');
main().catch(console.error);
console.log('After main');


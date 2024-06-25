import { BarretenbergBackend } from './node_modules/@noir-lang/backend_barretenberg';
import { Noir } from './node_modules/@noir-lang/noir_js';
import circuit from '../target/age_verification.json';

const MIN_AGE = 18;

async function main() {
    const backend = new BarretenbergBackend(circuit);
    const noir = new Noir(circuit, backend);

    const verifyButton = document.getElementById('verifyButton');
    const ageInput = document.getElementById('ageInput');
    const result = document.getElementById('result');

    verifyButton.addEventListener('click', async () => {
        const age = parseInt(ageInput.value, 10);

        try {
            const { witness } = await noir.execute({ age: age, min_age: MIN_AGE });
            const proof = await noir.generateProof(witness);
            const verified = await noir.verifyProof(proof);

            if (verified) {
                result.textContent = `Age verification successful. You are ${age} years old and meet the minimum age requirement.`;
            } else {
                result.textContent = 'Age verification failed. The proof is invalid.';
            }
        } catch (error) {
            result.textContent = `Age verification failed. Error: ${error.message}`;
        }
    });
}

main().catch(console.error);
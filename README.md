# NoirJS Zero Knowledge Proof for Age Verification

## Overview

This project implements a Zero Knowledge Proof (ZKP) system for age verification using NoirJS. It allows users to prove they meet a minimum age requirement without revealing their exact age, preserving privacy while ensuring compliance.

## Key Features

- Utilizes NoirJS and the Barretenberg backend for ZKP computations
- Implements a simple web interface for age input and verification
- Performs age verification against a preset minimum age (18 years)
- Provides immediate feedback on the verification result

## How It Works

1. The application loads a pre-compiled Noir circuit for age verification.
2. Users input their age through a web interface.
3. Upon submission, the app executes the Noir circuit with the provided age and the minimum age requirement.
4. The circuit verifies if the input age meets or exceeds the minimum age.
5. The result is displayed to the user, confirming success or failure of the age verification.

## Technical Details

- Built with NoirJS, a JavaScript framework for zero-knowledge proofs
- Uses the Barretenberg backend for efficient ZKP computations
- Integrates with HTML elements for user interaction
- Implements error handling for robust operation

## Privacy Considerations

This application demonstrates how zero-knowledge proofs can be used to verify age requirements without exposing the actual age of the user, enhancing privacy in age-gated services.

# try-to-be-qa

🚀 From Dev to QA (…or at least trying)

📖 About this Repo
I’m a developer who wants to experience life as a QA tester but… still a dev at heart. ❤️
So, I created this FizzBuzz testing practice with GitLab CI/CD to see what it feels like to:
✅ Write tests for my own code
✅ Set up Automated & Manual Testing
✅ Pretend I enjoy breaking my own work

💡 What’s Inside?
A FizzBuzz implementation in TypeScript 🏗️

GitLab CI/CD pipeline with:
🔹 Build & Test stage (with Jest)
🔹 Manual Testing stage (because some bugs are just too sneaky)
🔹 A fake Deploy stage (for now)

👀 Why This Exists?
Because one day, I woke up and thought:
"What if I stopped writing bugs and started finding them instead?"
…And now I’m here. 🤷‍♂️

---

# FizzBuzz Requirement

#### 1.  Input and Output
- The program accepts input of type number, string, boolean, null, undefined, array, or object.
- The program returns an array of strings, with the array size equal to n (a valid number input from 1 to n).

#### 2. FizzBuzz Logic
- Generate a sequence from 1 to n.
- If a number is `divisible by 3`, replace it with `"Fizz"`.
- If a number is `divisible by 5`, replace it with `"Buzz"`.
- If a number is `divisible by both 3 and 5`, replace it with `"FizzBuzz"`.
- Otherwise, keep the number as a string.

#### 3. Handling Different Input Types
- If input is a number:
  - If it's a positive integer (≥1) → Process normally.
  - If it contains decimals (except .000...) → Return `[]`.
  - If it's less than 1 → Return `[]`.
- If input is a string:
  - If the string represents a valid number (e.g., "5", "10", "7.0") → Convert it to a number and process as per 2.1.
  - If the string cannot be converted to a number (e.g., "abc", "3M") → Return `[]`.
- If input is null or undefined → Return `[]`.
- If input is a boolean, array, or object → Return `[]`.

#### 4. Example Cases
| Input	| Output |	Explanation |
| --- | --- | --- |
`5` |	`["1", "2", "Fizz", "4", "Buzz"]` |	Normal case
`3.1` |	`[]` |	Contains decimals, not .000...
`"5.0"` |	`[]` |	String with decimals
`"10"` |	`["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]` |	String converted to number
`null` |	`[]` |	Null is invalid
`undefined` |	`[]` |	Undefined is invalid
`true` |	`[]` |	Boolean is invalid
`{}` |	`[]` |	Object is invalid
`[]` |	`[]` |	Array is invalid

#### 5. Testing Requirements
- Automated Testing
  - Use `Jest` (or other) to verify the correctness of FizzBuzz.
- Manual Testing in GitLab CI/CD
   - There must be a manual testing job in GitLab CI/CD.
   - QA must be able to manually trigger the test via GitLab UI.
   - QA must verify the input/output before proceeding to deployment.

#### 6. Deployment Process
- Deployment must be handled through GitLab CI/CD.
- Deployment should be simulated using an `echo script` instead of actual deployment.
- Deployment should only occur if all tests pass (both automated and manual).

#### 7. Non-Functional Requirements
✔ The system must run within GitLab CI/CD pipeline.
✔ The pipeline must have 3 stages:
  ```
  build → test → deploy
  ```
  - on build stage, the system must install dependencies(1 job).
  - on test stage, the system must run automated tests and QA must approve manual tests (2 jobs).
  - on deploy stage, the system must simulate deployment (just run `script echo`)(1 job).

✔ QA must be able to trigger the manual test via the GitLab UI.

#### 8. Success Criteria
✅ QA can run both automated and manual tests successfully.
✅ The GitLab pipeline only deploys if all tests pass.
✅ If QA does not trigger the manual test, the system must not deploy.
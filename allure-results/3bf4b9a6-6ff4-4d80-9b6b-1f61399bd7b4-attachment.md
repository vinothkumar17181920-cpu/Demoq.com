# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Condition\Deserializationemp.spec.js >> Validate employee details from JSON
- Location: tests\Condition\Deserializationemp.spec.js:4:5

# Error details

```
Error: ENOENT: no such file or directory, open 'C:\Users\Dell\OneDrive\Documents\Playwright testing\empolyeetestdata.json'
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import fs from'fs'
  3  | 
  4  | test('Validate employee details from JSON', async () => {
  5  |   // Deserialize JSON data
> 6  |   const employee = fs.readFileSync('./empolyeetestdata.json','utf-8')
     |                       ^ Error: ENOENT: no such file or directory, open 'C:\Users\Dell\OneDrive\Documents\Playwright testing\empolyeetestdata.json'
  7  |   const employeedata = JSON.parse(employee)
  8  | 
  9  |   // Find the second mobile number
  10 |   const secondMobile = employeedata.phone.mobile2;
  11 |   console.log('Second Mobile Number:', secondMobile);
  12 |   expect(secondMobile).toBeDefined();
  13 | 
  14 |   // Verify employee has skillset "API"
  15 |   const skillset = employeedata.skills.includes("API");
  16 |   console.log('Has API Skill:', skillset);
  17 |   expect(skillset).toBe(true);
  18 | });
```
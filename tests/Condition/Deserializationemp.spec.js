import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Validate employee details from JSON', async () => {
  // Deserialize JSON data
  const filePath = path.join(__dirname, 'empolyeetestdata.json');
  const employee = fs.readFileSync(filePath, 'utf-8');
  const employeedata = JSON.parse(employee);

  // Find the second mobile number
  const secondMobile = employeedata.phone.mobile2;
  console.log('Second Mobile Number:', secondMobile);
  expect(secondMobile).toBeDefined();

  // Verify employee has skillset "API"
  const skillset = employeedata.skills.includes("api_testing");
  console.log('Has API Skill:', skillset);
  expect(skillset).toBe(true);
});
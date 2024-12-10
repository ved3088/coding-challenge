# RewardPay Coding Challenge

## Overview

This repo contains financial metric calculations based on the data provided on data.json. 
This challenge has been solved using Test Driven Development (TDD) to ensure functional and tested code to improve code quality.
The calculated metrics are:

### Revenue
Revenue is calculated by adding all values under `total_values` where the `account_category` is set to `revenue`.

### Expenses
Revenue is calculated by adding all values under `total_values` where the `account_category` is set to `expense`.

### Gross Profit Margin
Gross Profit Margin represents the percentage of revenue retained after deducting the cost of goods sold 

### Net Profit Margin
Net Profit Margin indicates profitability after accounting for all expenses. 

### Working Capital Ratio
The Working Capital Ratio measures liquidity and financial health and is calculated from assets and liabilities


## Instructions to run the project
* Clone the repository locally
* Run `npm install` to install necessary dependancies
* Run `npm start` to run the application
* Run `npm test` to run the test 
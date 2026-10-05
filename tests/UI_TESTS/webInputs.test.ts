import { test, expect } from '@playwright/test';
import {AllRelatedActions} from '../../Actions/AllRelatedActions.ts';
import { DateLogics } from '../../Actions/dateLogics.ts';

test('testing the way of giving inputs',async({page})=>{
    const allRelatedActions = new AllRelatedActions(page);
    await allRelatedActions.searchTheWebsite("inputs");

    await allRelatedActions.typeIntoTextField("Input: Number","23");
    await allRelatedActions.typeIntoTextField("Input: Text","SHANKAR");
    await allRelatedActions.typeIntoTextField("Input: Password","Shankar@2003");

    const dateLogics = new DateLogics();
    const currentDate = dateLogics.getCurrentDate();
    console.log("current Date: ",currentDate);// just want to check 

    await allRelatedActions.typeIntoTextField("Input: Date", dateLogics.getCurrentDate());

    await allRelatedActions.clickOnTheButton("Display Inputs");
    await allRelatedActions.clickOnTheButton("Clear Inputs");
});
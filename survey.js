import { generatePaths } from './generatePaths.js';
import * as fs from "fs"


const questionnaireConfigJSON = fs.readFileSync('questionnaireConfig.json');
const questionnaireConfig = JSON.parse(questionnaireConfigJSON);


function generateQuestionnaire(config) {
    const paths = generatePaths(config);
    return {
      paths: {
        number: paths.length,
        list: paths
      }
    };
  }
  
  const result = generateQuestionnaire(questionnaireConfig);
  

  console.log(JSON.stringify(result, null, 2));
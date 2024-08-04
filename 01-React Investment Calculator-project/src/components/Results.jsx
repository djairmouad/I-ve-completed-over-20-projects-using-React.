
import{calculateInvestmentResults,formatter} from '../util/investment.js';

const results=[];
export default function Results({input}){
    const resultData=calculateInvestmentResults(input);
    const initialInvestment=resultData[0].valueEndOfYear- resultData[0].interest * resultData[0].annualInvestment;

    console.log(resultData);
    return(
        <table id='result'>
        <thead>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
         </thead>
            <tbody className='center'>
            
            {resultData.map((item) => {
    let totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;


    return (
        <tr key={item.year}>
            {[
                <td>{item.year}</td>,
                <td>{formatter.format(item.valueEndOfYear)}</td>,
                <td>{formatter.format(item.interest)}</td>,
                <td>{formatter.format(totalInterest)}</td>,
                <td>{formatter.format(item.annualInvestment)}</td>,
            ]}
        </tr>
    );
})}

            </tbody>
        </table>
    );
} 
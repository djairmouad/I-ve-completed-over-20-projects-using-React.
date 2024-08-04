

export default function User({input,userInput}) {

  const labels = ["initialInvestment", "annualInvestment", "expectedReturn", "duration"];
   
  return (
    <section id="user-input">
      <div className="input-group">
        {labels.map((item, index) => (
          <p key={index}>
            <label>{item}</label>
            <input
              type="number"
              value={userInput[item]}
              onChange={(event) => input(item, event.target.value)}
            />
          </p>
        ))}
      </div>
    </section>
  );
}

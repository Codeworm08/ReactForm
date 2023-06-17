import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
function Disp({name,email,phone,grade}) {
  return (
    <div className='Result boxGlow'>
      <h2>Data Entered:</h2>
      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
        <li>Grade: {grade}</li>
      </ul>
    </div>
  );
}
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword , setConfPass] = useState('');
  const [phone, setPhone] = useState('');
  const [sub, setSub] = useState(false);
  const [dispForm,setDispForm] = useState(true); 
  const handleNameChange =(e)=> {
    setName(e.target.value);
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value);
  }
  const handlePass = (e)=>{
    setPassword(e.target.value);
  }
  const handleConfPass = (e)=>{
    setConfPass(e.target.value);
  }
  const handlePhone = (e)=>{
    setPhone(e.target.value);
  }
  const handleGrade = (e)=>{
    setGrade(e.target.value);
  }
  const handleRevert = (e)=>{
    setSub(false);
    setDispForm(true);
    setConfPass('');
    setPassword('');
    setEmail('');
    setName('');
    setPhone('');
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    let pattern=new RegExp("^(\\+?\\d{1,3}|\\+)?[\\d]{10}$");
    if(password!=confPassword)
    {
      alert("Password and Confirmation do not match!");
    }
    else if(!pattern.test(phone))
    {
      alert("Invalid Phone number!");
    }
    else
    {
      setSub(true);
    }
    
  }
  return (
    <div className="App">
      <header className="App-header">
        {dispForm && !sub ? (<form className="boxGlow" onSubmit={(e)=>{handleSubmit(e)}}>
          <label>Name:</label><br/>
          <input type="text" value={name} required onChange={(e)=>{handleNameChange(e)}} /><br/>
          <label>Email:</label><br/>
          <input type="email" value={email} required onChange={(e)=>{handleEmail(e)}} /><br/>
          <label>Password:</label><br/>
          <input type="password" value={password} minLength={8} required onChange={(e)=>{handlePass(e)}} /><br/>
          <label>Confirm Password:</label><br/>
          <input type="password" value={confPassword} required onChange={(e)=>{handleConfPass(e)}} /><br/>
          <div onChange={handleGrade}>
          <label>Grade Earned:</label><br/>
          <label>A</label>
          <input type="radio" name="grade" value="A" checked={grade=="A"}/>
          <label>B</label>
          <input type="radio" name="grade" value="B" checked={grade=="B"}/>
          <label>C</label>
          <input type="radio" name="grade" value="C" checked={grade=="C"}/>
          </div>          
          <label>Phone:</label><br/>
          <input type="tel" value={phone} onChange={(e)=>{handlePhone(e)}}/><br/>
          <input type="submit" value="Submit"/>
        </form>
        ): (
          <>
          {sub && (
            <>
            <Disp name={name} email={email} phone={phone} grade={grade}/>
            <button onClick={handleRevert} className='revButton'><img src='/revert.png' alt="Go Back to Form"/></button>
            </>
          )}
          </>          
        )}
        
      </header>
    </div>
  );
}

export default App;

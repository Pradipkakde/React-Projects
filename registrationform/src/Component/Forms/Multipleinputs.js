import React from 'react'

function Multipleinputs() {
  return (
    <>
    <body>
        <div className='container'>
            <h2>Registration Form</h2>
            <div className='form-container'>
                <form>

                    <div className='input-name'>
                    <i class="fa fa-user lock"></i>
                    <input type='text' placeholder='FirstName' className='name'/>
                    <span>
                        <i className='fa fa-user lock'></i>
                        <input type='text' placeholder='Last Name' className='name'/>
                    </span>
                    </div>

                    <div className='input-name'>
                    <i class="fa fa-envelope lock"></i>
                    <input type='email' placeholder='email' className='text-name'/>
                    </div>

                    <div className='input-name'>
                    <i class="fa fa-lock lock"></i>
                    <input type='password' placeholder='Password' className='text-name'/>
                    </div>

                    <div className='input-name'>
                    <i class="fa fa-lock lock"></i>
                    <input type='password' placeholder='confirm passwrod' className='text-name'/>
                    </div>

                    <div className='input-name'>
                    
                    <input type="radio" className='radio-button' name='r1'/>
                    <label>Male</label>
                    <input type="radio" className='radio-button' name='r1'/>
                    <label>Female</label>
                    </div>

                    <div className='input-name'>
                    
                    <select className='country'>
                        <option>Select a country</option>
                        <option>India</option>
                        <option>Italy</option>
                        <option>Dubai</option>
                        <option>Usa</option>
                        <option>Germany</option>
                        <option>Japan</option>
                    </select>
                    <div className='arrow'></div>
                    </div>


                    <div className='input-name'>
                    <input type='checkbox' name='check-button'/>
                    <label>I accept the terms and conditions</label>                    
                    </div>

                    <div className='input-name'>
                        <input type='submit' className='button' value="Register"/>
                    </div>
                    


                </form>
            </div>
        </div>
    </body>
    </>
    
  )
}

export default Multipleinputs

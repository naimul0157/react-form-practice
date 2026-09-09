
const SimpleForm = () => {
    const SubmittedForm = (e)=>{
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div className='text-center'>
            <form onSubmit={SubmittedForm}>
                <input type="text" name='name' placeholder='Your Name' className='border px-2'/><br />
                <input type="email" name="email" placeholder='Enter your Email' className='border px-2 my-2' /><br />
                <input type="submit" value="Submit" className='btn'/>
            </form>
        </div>
    );
};

export default SimpleForm;
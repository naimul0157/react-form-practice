import { Suspense, useState } from "react";
import Showmore from "../../Showmore/Showmore";


const ChildrenCard = ({ data }) => {
    const { name, id, address, email, phone } = data;
    const [showmore, setshowmore] = useState(false);
    const promiseData = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
    return (
        <div className='border px-5 py-5 border-red-400 rounded-xl'>
            <div>
                <h1>Name: {name}</h1>
                <h1>Phone:{phone}</h1>
                <h1>Email:{email}</h1>
                {
                    showmore && <Suspense>
                        <Showmore promiseData={promiseData}></Showmore>
                    </Suspense>
                }
                <button className="btn mt-3" onClick={() => setshowmore(!showmore)}>{showmore ? "Hide" : "Show more"}</button>

            </div>
        </div>
    );
};

export default ChildrenCard;
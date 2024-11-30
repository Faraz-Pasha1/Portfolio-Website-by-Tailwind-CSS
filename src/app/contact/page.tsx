

export default function Contact () {
    return (
        <div>
            <div className = "p-[10px] w-[600px] h-[500px] ml-[50px]">
                <p className = "text-[#ffcdb2] text-[90px] font-sans font-bold">GET</p>
                <p className = "text-[#ffcdb2] text-[90px] font-sans font-bold mt-[-40px]">In</p>
                <p className = "text-[#ffcdb2] text-[90px] font-sans font-bold mt-[-40px]">Touch..!</p>
                <p className = "mt-[5px] text-[22px] font-sans font-bold">If you want to experience with me for any web application.</p>
                <p className = "mt-[5px] text-[22px] font-sans font-bold">Fill out the form and message me. So i will reply very soon</p>
            </div>

            <div className = "pt-[20px] mt-[-480px] ml-[720px]">
                <p className = "text-[#ffcdb2] text-[18px] font-bold">Name</p>
                <input type = "text" id="name" name="name" placeholder = "Enter your name"className = "w-[460px] h-[30px] p-[5px] rounded-[5px]"/>
                <br/><br/>

                <p className = "text-[#ffcdb2] text-[18px] font-bold">Contact No.</p>
                <input type = "number" id="contact" name="contact" placeholder = "Enter your contact no."className = "w-[460px] h-[30px] p-[5px] rounded-[5px]"/>
                <br/><br/>

                <p className = "text-[#ffcdb2]  text-[18x] font-bold">Email I.D</p>
                <input type = "string" id="name" name="name " placeholder = "Enter your email i.d"className = "w-[460px] h-[30px] p-[5px] rounded-[5px]"/>
                <br/><br/>

                <p className = "text-[#ffcdb2]  text-[18px] font-bold">Message</p>
                <textarea id="message" className = "p-[5px] rounded-[5px]" placeholder="Enter your message here.." rows = {5} cols = {60} ></textarea> 

                <button className = "bg-[#2b2a2a] text-[white] px-[14px] py-[6px] rounded-[5px] transition duration-300 ease-in-out mt-[135px] ml-[-470px] absolute hover:bg-[#c9a38e] hover:text-black">Submit</button>

            </div>


        </div>
    )
}
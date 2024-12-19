

export default function Contact () {
    return (

            <div className="flex flex-col sm:px-5 md:px-10 mt-10">
                {/* Heading Section */}
                <div className="text-center mb-6">
                    <p className="text-[#ffcdb2] text-6xl font-sans font-bold">Get In</p>
                    <p className="text-[#ffcdb2] text-6xl font-sans font-bold">Touch..!</p>
                    <p className="mt-4 text-lg sm:text-xl md:text-2xl font-sans font-bold">
                    If you want to experience with me for any web application, fill out the form and message me. I will reply very soon.
                    </p>
                </div>

                {/* Form Section */}
                <div className="flex flex-col sm:w-full md:w-3/4 mx-auto">
                    <label className="text-[#ffcdb2] text-lg font-bold mb-2">Name</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your name" 
                    className="w-full h-12 p-3 rounded-lg mb-4 bg-[#1d1d1d] text-white"
                    />

                    <label className="text-[#ffcdb2] text-lg font-bold mb-2">Contact No.</label>
                    <input 
                    type="number" 
                    id="contact" 
                    name="contact" 
                    placeholder="Enter your contact no." 
                    className="w-full h-12 p-3 rounded-lg mb-4 bg-[#1d1d1d] text-white"
                    />

                    <label className="text-[#ffcdb2] text-lg font-bold mb-2">Email I.D</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email I.D" 
                    className="w-full h-12 p-3 rounded-lg mb-4 bg-[#1d1d1d] text-white"
                    />

                    <label className="text-[#ffcdb2] text-lg font-bold mb-2">Message</label>
                    <textarea 
                    id="message" 
                    name="message" 
                    className="p-3 rounded-lg mb-4 bg-[#1d1d1d] text-white" 
                    placeholder="Enter your message here..." 
                    rows={5}
                    ></textarea>

                    <button className="bg-[#2b2a2a] text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-[#c9a38e] hover:text-black mt-4">
                    Submit
                    </button>
                </div>
                </div>

        
    )
}
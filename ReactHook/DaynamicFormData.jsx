import { useState } from "react";


const FormObj = () => {

    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com',

        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://react.dev/images/docs/scientists/Sd1AgUOm.jpg',
      }
    });

    

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setPerson({
          ...person,
          [name]: value
        })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log("Submit Date is : ",person)
    }


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2">
            Fill in your information below
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handelSubmit}>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>

            <input
              value={person.firstName}
              onChange={handleChange}
              name="firstName"

              type="text"
              placeholder="Enter your first name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
              outline-none transition focus:border-blue-500 focus:ring-2 
              focus:ring-blue-100"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>

            <input
              value={person.lastName}
              onChange={handleChange}
              name="lastName"

              type="text"
              placeholder="Enter your last name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
              outline-none transition focus:border-blue-500 focus:ring-2 
              focus:ring-blue-100"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              value={person.email}
              onChange={handleChange}
              name="email"

              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
              outline-none transition focus:border-blue-500 focus:ring-2 
              focus:ring-blue-100"
            />
          </div>

          {/* artwork */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Artwork
            </label>

            <input
              value={person.artwork.city}
              onChange={handleChange}
              name="city"

              type="text"
              placeholder=""
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
              outline-none transition focus:border-blue-500 focus:ring-2 
              focus:ring-blue-100"
            />
          </div>

          {/* Submit Button */}
          <button
            
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 
            text-white font-semibold py-3 rounded-xl 
            transition duration-200 shadow-md hover:shadow-lg"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
    );
};

export default FormObj;

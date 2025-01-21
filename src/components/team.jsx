const ContactCard = () => {
  return (

    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
        <div className="p-6 rounded-md shadow-md bg-transparent max-w-sm text-center">
            {/* Profile Photo */}
            <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGg6ci4uvONqw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722336124694?e=1743033600&v=beta&t=q_q845OsgIvSuEDDx1UOhEJ5mZHCBgX1ChGk-cD0EG4"
                alt="Profile"
                className="w-64 h-64 mx-auto rounded-full"
            />
            {/* Contact Details */}
            <div className="mt-4">
                <h1 className="text-2xl font-bold text-gray-100">Nihal Reddy</h1>
                <p className="text-sm text-gray-200 mt-1">Senior Manger-</p><br></br>
                <p className="text-sm text-gray-200 mt-1">Events, Startups and Alumni Relations</p>
                <a
                href="mailto:johndoe@example.com"
                className="text-blue-500 hover:underline text-sm mt-1 block"
                >
                nihal.reddy@ecell-iitkgp.org
                </a>
            </div>
            </div>
    <div className="p-6 rounded-md shadow-md bg-transparent max-w-sm text-center">
      {/* Profile Photo */}
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQHfCPXFgtJ34Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699365064844?e=1743033600&v=beta&t=IPIxtdgW45DKSAI1zqr2oGZvscE8sQmrAFDmDFNh8NY"
        alt="Profile"
        className="w-64 h-64 mx-auto rounded-full"
      />
      {/* Contact Details */}
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-gray-100">Akriti Mishra</h1>
        <p className="text-sm text-gray-200 mt-1">Senior Manger-</p><br></br>
        <p className="text-sm text-gray-200 mt-1">Events, Social Media Marketing</p>
        <a
          href="mailto:johndoe@example.com"
          className="text-blue-500 hover:underline text-sm mt-1 block"
        >
          akriti.mishra@ecell-iitkgp.org
        </a>
      </div>
    </div>
    </div>
    
    
  );
};

export default ContactCard;

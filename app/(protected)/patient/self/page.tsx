import MedicalHistory from "@/app/components/Dashboard/profile/MedicalHistory";
const Self = () => {
  const ProfileDate = [
    {
      id: 1,
      title: "Gender",
      value: "Male",
    },
    {
      id: 2,
      title: "Date of Birth",
      value: "19-12-2003",
    },
    {
      id: 3,
      title: "Phone Number",
      value: "9843023686",
    },
    {
      id: 4,
      title: "Marital Status",
      value: "UnMarried",
    },
    {
      id: 5,
      title: "Blood Group",
      value: "B+",
    },
    {
      id: 6,
      title: "Address",
      value: "Kapan Kathmandu",
    },
    {
      id: 7,
      title: "Contact Person",
      value: "Ram",
    },
    {
      id: 8,
      title: "Emergency Contact",
      value: "984238732",
    },
    {
      id: 9,
      title: "Last visit",
      value: "No visit",
    },
  ];
  return (
    <div className="py-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* Left Side */}
      <div className="lg:col-span-8">
        <div className="flex flex-col xl:flex-row gap-4">
          {/* Profile Card */}
          <div className="xl:w-72 bg-white rounded-md p-4 flex flex-col justify-center items-center">
            <div className="w-12 h-12 rounded-full bg-purple-800 text-white flex items-center justify-center mb-2">
              <p className="text-xs">CP</p>
            </div>

            <h3 className="font-bold text-lg">Koshish Khadka Patient</h3>

            <p className="text-xs font-light text-gray-500">
              koshishkhadka364@gmail.com
            </p>

            <p className="font-semibold mt-2">0</p>

            <p className="text-xs font-light">Appointments</p>
          </div>

          {/* Patient Information */}
          <div className="flex-1 bg-white rounded-md p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {ProfileDate.map((items) => (
                <div key={items.id}>
                  <p className="text-xs text-gray-500">{items.title}</p>
                  <p className="text-sm font-medium">{items.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Medical Records */}
        <div className="bg-white mt-4 rounded-md p-4">
          <h3 className="font-semibold mb-4">Medical Records</h3>
          <MedicalHistory />
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:col-span-4">
        <div className="bg-white rounded-md p-4 sticky top-4">
          <h3 className="font-semibold">Patient Review</h3>

          <div className="mt-4">
            <p className="text-xs">No Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Self;

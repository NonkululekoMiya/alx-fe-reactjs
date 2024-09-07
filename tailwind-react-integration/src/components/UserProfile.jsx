function UserProfile() {
    return (
      <div className="bg-gray-100 sm:p-4 md:p-8 sm:max-w-sx md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
        <img src="https://via.placeholder.com/150" alt="User" ClassName="rounded-full sm:w-36 sm:h-36 md:w-36 md:h-36 mx-auto"/>
        <h1 className="md:text-xl sm:text-lg text-blue-800 my-4">John Doe</h1>
        <p className="sm:text-sm text-gray-600 md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;
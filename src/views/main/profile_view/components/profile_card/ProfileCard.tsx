const ProfileCard = ({ profile }: { profile: any }) => {
  return (
    <div>
      <div className='flex items-center gap-10 bg-white shadow-sm rounded-lg p-4'>
        <div className='rounded-full overflow-hidden w-28 h-28'>
          <img
            className='w-full h-auto'
            src={profile.image}
            alt={profile.firstName}
          />
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-4'>
            {profile.firstName} {profile.lastName}
          </h3>
          <p className='text-gray-500'>{profile.email}</p>
          <p className='text-gray-500'>{profile.phone}</p>
          <p className='text-gray-500'>{profile.address.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

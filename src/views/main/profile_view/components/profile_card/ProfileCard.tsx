const ProfileCard = ({ profile }: { profile: any }) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center gap-10 bg-white shadow-sm rounded-lg p-4'>
        <div className='border border-gray-200 rounded-full overflow-hidden w-28 h-28'>
          <img
            className='w-full h-auto'
            src={profile.image}
            alt={profile.firstName}
          />
        </div>
        <div>
          <h3 className='text-lg font-medium mb-4'>
            {profile.firstName} {profile.lastName}
          </h3>
          <p className=''>{profile.email}</p>
          <p className=''>{profile.company.title}</p>
        </div>
      </div>
      <div className='flex flex-col gap-5 bg-white shadow-sm rounded-lg p-4'>
        <div>
          <h3>Personal information</h3>
        </div>
        <div className='flex'>
          <div className='flex-1'>
            <p className='text-slate-500 text-sm'>First name</p>
            <p>{profile.firstName}</p>
          </div>
          <div className='flex-1'>
            <p className='text-slate-500 text-sm'>Last name</p>
            <p>{profile.lastName}</p>
          </div>
        </div>
        <div className='flex '>
          <div className='flex-1'>
            <p className='text-slate-500 text-sm'>Email address</p>
            <p>{profile.email}</p>
          </div>
          <div className='flex-1'>
            <p className='text-slate-500 text-sm'>Phone</p>
            <p>{profile.phone}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-5 bg-white shadow-sm rounded-lg p-4'>
        <div>
          <h3>Address</h3>
        </div>
        <div className='flex'>
          <div className='flex-1'>
            <p className='text-slate-500 text-sm'>Country</p>
            <p>{profile.address.country}</p>
          </div>
          <div className='flex-1'>
            <p className='text-slate-500 text-sm'>State/City</p>
            <p>{profile.address.state}</p>
          </div>
        </div>
        <div className='flex '>
          <div className='flex-1'>
            <p className='text-slate-500 text-sm'>Address</p>
            <p>{profile.address.address}</p>
          </div>
          <div className='flex-1'>
            <p className='text-slate-500 text-sm'>Postal code</p>
            <p>{profile.address.postalCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

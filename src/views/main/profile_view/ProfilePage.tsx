import { useQuery } from "@tanstack/react-query";
import { getProfile } from "./api/get_profile";
import ProfileCard from "./components/profile_card/ProfileCard";

const ProfilePage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get_profile"],
    queryFn: () => getProfile(),
  });

  return (
    <div>
      {isLoading && (
        <div className='flex justify-center items-center'>Loading...</div>
      )}
      {data && <ProfileCard profile={data} />}
    </div>
  );
};

export default ProfilePage;

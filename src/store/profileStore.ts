import { create } from 'zustand';

interface Profile {
  gender: string;
  age: string;
  occupation: string;
  relationship: string;
  location: string;
  height: string;
  weight: string;
  religion: string;
  nationality: string;
  profileImage: string;
}

interface ProfileState {
  profile: Profile;
  updateProfile: (updatedProfile: Profile) => void;
  setProfileImage: (image: string) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: {
    gender: 'Male',
    age: '25',
    occupation: 'Software Engineer',
    relationship: 'Single',
    location: 'Lagos',
    height: '5ft 8 - 5ft 10',
    weight: '150kg',
    religion: 'Christian',
    nationality: 'Nigeria',
    profileImage: "/images/travel-agent2.png", // Default profile image
  },
  updateProfile: (updatedProfile) => set({ profile: updatedProfile }),
  setProfileImage: (image) =>
    set((state) => ({
      profile: { ...state.profile, profileImage: image },
    })),
}));

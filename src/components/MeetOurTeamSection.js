import MeetOurTeamSlider from "./MeetOurTeamSlider";
function MeetOurTeamSection() {
  const slides = [
    {
      name: "John Doe",
      position: "Consultant",
      email: "3dzarma.busatlic@gmail.com",
      img: "male-portrait-profile-social-media-royalty-free-thumbnail.jpg",
      linkedin: "/",

      id: 1
    },
    {
      name: "John Doe",
      position: "Consultantool",
      email: "1dzarma.busatlic@gmail.comay",
      img: "male-portrait-profile-social-media-royalty-free-thumbnail.jpg",
      linkedin: "/",

      id: 2
    },
    {
      name: "John Doe",
      position: "Consultant",
      email: "1dzarma.busatlic@gmail.comay",
      img: "male-portrait-profile-social-media-royalty-free-thumbnail.jpg",
      linkedin: "/",

      id: 3
    },
    {
      name: "John Doe",
      position: "Consultant",
      email: "31dzarma.busatlic@gmail.comay",
      img: "male-portrait-profile-social-media-royalty-free-thumbnail.jpg",
      linkedin: "/",

      id: 4
    },
    {
      name: "John Doe",
      position: "Consultant",
      email: "3dzarma.busatlic@gmail.com",
      img: "male-portrait-profile-social-media-royalty-free-thumbnail.jpg",
      linkedin: "/",
      id: 5
    },
    {
      name: "Armin Busatlic",
      position: "Consultant",
      email: "3dzarma.busatlic@gmail.com",
      img: "male-portrait-profile-social-media-royalty-free-thumbnail.jpg",
      linkedin: "/",

      id: 6
    }
  ];
  return (
    <section className="text-center bg-red-100 py-8">
      <h2 className="text-white text-6xl">Meet Our Team</h2>
      <p className="recruiter-section__subheading">
        Whilst our name is brand new, our team of education specialists boast 30
        years of experience within the industry.
      </p>
      <div className="container">
        <MeetOurTeamSlider slides={slides} />
      </div>
    </section>
  );
}
export default MeetOurTeamSection;

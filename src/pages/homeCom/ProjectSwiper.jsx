import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

const ProjectSwiper = () => {
  const [project, setProject] = useState(0);
  const [clients, setClients] = useState(0);
  const [awards, setAwards] = useState(0);
  const [members, setMembers] = useState(0);
  const _intervalRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    if (startCounter) {
      setProject(0);
      setAwards(0);
      setMembers(0);
      setClients(0);
      _intervalRef.current = setInterval(() => {
        setProject((project) => project + 1);
        setAwards((project) => project + 1);
        setMembers((project) => project + 1);
        setClients((project) => project + 1);
      }, 1);
    } else {
      clearInterval(_intervalRef.current);
      setProject(2500);
      setAwards(5620);
      setMembers(364);
      setClients(2960);
    }
    return () => clearInterval(_intervalRef.current);
  }, [startCounter]);

  return (
    <div
      onMouseOver={() => setStartCounter(true)}
      onMouseOut={() => setStartCounter(false)}
      className="container mt-5 py-5"
    >
      {" "}
      <Swiper
        modules={[Navigation, EffectFade, Autoplay, Pagination]}
        effect="slide"
        speed="2000"
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          425: { slidesPerView: 2 },
        }}
        spaceBetween={30}
        className="swiper py-5 "
      >
        <SwiperSlide>
          <div className="cardProject container text-center align-items-center">
            <div className="iconProjectDiv IconCard1 text-white">
              <i className=" iconProject  fas fa-mug-hot " />
            </div>
            <h3 className="cg fw-bold fs-2 font-b">{project}+</h3>
            <h6 className="font-b cgt">Project</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cardProject container text-center align-items-center">
            <div className="iconProjectDiv IconCard2 text-white">
              <i className=" iconProject  far fa-heart " />
            </div>
            <h3 className="cg fw-bold fs-2 font-b">{clients}+</h3>
            <h6 className="font-b cgt">Satisfied Clients</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cardProject container text-center align-items-center">
            <div className="iconProjectDiv IconCard3 text-white">
              <i className=" iconProject  fas fa-award " />
            </div>
            <h3 className="cg fw-bold fs-2 font-b">{awards}</h3>
            <h6 className="font-b cgt">Win Awards</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cardProject container text-center align-items-center">
            <div className="iconProjectDiv IconCard4 text-white">
              <i className=" iconProject  far fa-user " />
            </div>
            <h3 className="cg fw-bold fs-2 font-b">{members}+</h3>
            <h6 className="font-b cgt">Team Member</h6>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectSwiper;

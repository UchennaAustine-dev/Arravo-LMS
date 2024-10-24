import { FaArrowRight, FaStar } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

const Collaborate = () => {
  return (
    <>
      <div className="min-h-[100vh] w-full flex flex-col items-center">
        <div className="text-[18px] font-[extra] text-center">
          We collaborate with{" "}
          <span className="text-[blue]">
            325+ leading universites and companies.
          </span>
        </div>
        <div className="my-3" />
        <div className="w-[95%] gap-3 grid grid-cols-8 max-xl:grid-cols-6 max-lg:grid-cols-4 max-sm:grid-cols-2">
          <div className="h-[70px] rounded-md border place-items-center grid">
            1
          </div>
          <div className="h-[70px] rounded-md border place-items-center grid">
            2
          </div>
          <div className="h-[70px] rounded-md border place-items-center grid">
            3
          </div>
          <div className="h-[70px] rounded-md border place-items-center grid">
            4
          </div>
          <div className="h-[70px] rounded-md border place-items-center grid">
            5
          </div>
          <div className="h-[70px] rounded-md border place-items-center grid">
            6
          </div>
          <div className="h-[70px] rounded-md border place-items-center grid">
            7
          </div>
          <div className="h-[70px] rounded-md border place-items-center grid">
            8
          </div>
        </div>
        <div className="my-3" />
        <div className="w-[95%]">
          <div className="flex items-center">
            <div className="font-[extra] text-[20px] max-md:text-[17px] tracking-wide">
              Launch a new career in as little as 6 months
            </div>
            <div className="flex items-center ml-3">
              <div>View all roles</div>
              <div className="ml-1">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="my-7" />
          <div className="w-full bg-[#ebebeb] flex h-[4px] relative justify-start">
            <div className="w-fit mr-4 -mt-6 bottom-0 ">
              <div>Project Manager</div>
              <div className="w-full  h-[4px] bg-[blue]" />
            </div>
            <div className="w-fit -mt-6 mx-4 bottom-0 ">
              <div>Data Analyst</div>
              <div className="w-full h-[4px]" />
            </div>
            <div className="w-fit -mt-6 mx-4 bottom-0 ">
              <div>Digital Marketer</div>
              <div className="w-full h-[4px]" />
            </div>
            <div className="w-fit -mt-6 mx-4 bottom-0 ">
              <div>IT Support Specialist</div>
              <div className="w-full h-[4px]" />
            </div>
            <div className="w-fit -mt-6 mx-4 bottom-0 ">
              <div>Business Analyst</div>
              <div className="w-full h-[4px]" />
            </div>
            <div className="w-fit -mt-6 mx-4 bottom-0 ">
              <div>Cybersecurity</div>
              <div className="w-full h-[4px]" />
            </div>
            <div className="w-fit -mt-6 mx-4 bottom-0 ">
              <div>Front-End Developer</div>
              <div className="w-full h-[4px]" />
            </div>
            <div className="w-fit -mt-6 mx-4 bottom-0 ">
              <div>UX Designer</div>
              <div className="w-full h-[4px]" />
            </div>
          </div>
          <div className="my-5" />
          <div className="w-full min-h-[600px] rounded-md border-2 flex flex-col items-center">
            <h2 className="w-[95%] mt-7 text-[25px] font-[extra] tracking-wide">
              Project Manager
            </h2>
            <p className="w-[95%] text-gray-400">
              Oversee the planning and execution of projects to ensure they're
              successful
            </p>
            <h3 className="w-[95%] text-[20px] tracking-wide font-medium">
              Median Salary
            </h3>
            <div className="my-2" />
            <div className="w-[95%] flex items-center text-[14px]">
              <div className="h-[40px] items-center pl-3 rounded-md bg-[#E8EEF7] w-[40%] flex">
                All Ocupations
              </div>
              <div className="ml-3">$37,960*</div>
            </div>
            <div className="my-2" />
            <div className="w-[95%] flex items-center text-[14px]">
              <div className="h-[40px] items-center pl-3 rounded-md text-white bg-[#340385] w-[80%] flex">
                Project Manager
              </div>
              <div className="ml-3">$102,800**</div>
            </div>
            <div className="my-4 border-b-2 w-[95%]" />
            <p className="w-[95%] text-[15px]">
              Job openings: <span className="font-bold">336,402**</span>
            </p>
            <div className="my-1 " />
            <p className="w-[95%] text-[15px]">
              Projected 10 year growth:{" "}
              <span className="font-bold">+11.1%</span>
            </p>
            <div className="my-7" />
            <h3 className="text-[20px] font-medium tracking-wide w-[95%]">
              Recommended Professional Certificates
            </h3>
            <div className="my-2" />
            <div className="w-[95%] gap-3 grid grid-cols-3 max-md:grid-cols-2 mb-3">
              {/* Microsof part */}
              <div className="h-[400px] hover:scale-[1.02] transition-all duration-300 hover:cursor-pointer hover:shadow-lg rounded-lg border flex flex-col items-center">
                <div className="w-full h-[200px] bg-[green] rounded-tr-lg rounded-tl-lg" />
                <div className="w-[95%] mt-2 flex items-center">
                  <div className="w-[30px] h-[30px] rounded-md border" />
                  <p className="ml-3 text-[14px]">Microsoft</p>
                </div>
                <div className="w-[95%] font-medium mt-2">
                  Microsoft Project Management
                </div>
                <p className="mt-2 w-[95%] text-[15px]">
                  Skills you'll gain: Risk Management, Budgeting, Stakeholder
                  Management, Planning,...
                </p>
                <div className="flex items-center w-[95%] mt-2">
                  <div className="flex items-center">
                    <span className="font-medium">4.7 </span>
                    <FaStar className="text-[blue] mx-2" /> (158 reviews)
                  </div>
                </div>
                <p className="w-[95%] text-[14px]">
                  Beginner. Professional Certificate. 4 months
                </p>
              </div>
              {/* Google part */}
              <div className="h-[400px] hover:scale-[1.02] transition-all duration-300 hover:cursor-pointer hover:shadow-lg rounded-lg border flex flex-col items-center">
                <div className="w-full h-[200px] bg-[green] rounded-tr-lg rounded-tl-lg" />
                <div className="w-[95%] mt-2 flex items-center">
                  <div className="w-[30px] h-[30px] rounded-md border" />
                  <p className="ml-3 text-[14px]">Google</p>
                </div>
                <div className="w-[95%] font-medium mt-2">
                  Google Project Management
                </div>
                <p className="mt-2 w-[95%] text-[15px]">
                  Skills you'll gain: Risk Management, Change Management,
                  Strategic Thinking, Career...
                </p>
                <div className="flex items-center w-[95%] mt-2">
                  <div className="flex items-center">
                    <span className="font-medium">4.8 </span>
                    <FaStar className="text-[blue] mx-2" /> (107k reviews)
                  </div>
                </div>
                <p className="w-[95%] text-[14px]">
                  Beginner. Professional Certificate. 4 months
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div>Explore all Certificates</div>
              <div className="ml-3">
                <FaArrowRight />
              </div>
            </div>
            <div className="w-[95%] flex items-center mb-7">
              <div className="min-w-[100px] border rounded-full min-h-[100px] mr-3" />
              <div className="text-[15px]">
                <div className="">
                  "Earning my Google Project Management: Professional
                  Certificate is one of the biggest accomplishments I’ve made in
                  my education, and it was a key stepping stone to my new
                  career."
                </div>
                <div> ~ Adrienne</div>
              </div>
            </div>
          </div>
          <div className="my-5" />
          <div className="font-medium tracking-wide text-[20px]">
            Specialization and Professional Certificates
          </div>
          <div className="text-[30px] font-medium">
            Most Popular Certificates
          </div>
          <div className="text-[20px]">
            Explore our most popular programs, get job-ready for and in-demand
            career.
          </div>
        </div>
        <div className="w-[95%] grid grid-cols-4 gap-3 mb-3">
          {/* First */}
          <div className="h-[300px] border rounded-[14px] my-2 flex items-center flex-col hover:cursor-pointer hover:scale-[1.02] transition-all duration-300 hover:shadow-md">
            <div className="w-[95%] border rounded-md mt-1 h-[150px]" />
            <div className="flex items-center w-[95%] mt-2">
              <div className="w-[30px] h-[30px] rounded-md border mr-2" />
              <p className="text-[14px] tracking-wide">Google</p>
            </div>
            <div className="w-[95%] font-medium mt-1">
              Google Data Analytics
            </div>
            <div className="flex items-center w-[95%] text-[blue] mt-1">
              <TbCertificate size={20} className="mr-2 " /> Build toward a
              degree
            </div>
            <div className="mt-1 w-[95%] text-[#6d6d6d] text-[15px]">
              Personal Certificate
            </div>
          </div>
          {/* Second */}
          <div className="h-[300px] border rounded-[14px] my-2 flex items-center flex-col hover:cursor-pointer hover:scale-[1.02] transition-all duration-300 hover:shadow-md">
            <div className="w-[95%] border rounded-md mt-1 h-[150px]" />
            <div className="flex items-center w-[95%] mt-2">
              <div className="w-[30px] h-[30px] rounded-md border mr-2" />
              <p className="text-[14px] tracking-wide">Google</p>
            </div>
            <div className="w-[95%] font-medium mt-1">
              Google Project Management:
            </div>
            <div className="flex items-center w-[95%] text-[blue] mt-1">
              <TbCertificate size={20} className="mr-2 " /> Build toward a
              degree
            </div>
            <div className="mt-1 w-[95%] text-[#6d6d6d] text-[15px]">
              Personal Certificate
            </div>
          </div>
          {/* Third */}
          <div className="h-[300px] border rounded-[14px] my-2 flex items-center flex-col hover:cursor-pointer hover:scale-[1.02] transition-all duration-300 hover:shadow-md">
            <div className="w-[95%] border rounded-md mt-1 h-[150px]" />
            <div className="flex items-center w-[95%] mt-2">
              <div className="w-[30px] h-[30px] rounded-md border mr-2" />
              <p className="text-[14px] tracking-wide">Google</p>
            </div>
            <div className="w-[95%] font-medium mt-1">Google IT Support</div>
            <div className="flex items-center w-[95%] text-[blue] mt-1">
              <TbCertificate size={20} className="mr-2 " /> Build toward a
              degree
            </div>
            <div className="mt-1 w-[95%] text-[#6d6d6d] text-[15px]">
              Personal Certificate
            </div>
          </div>
          {/* Fourth */}
          <div className="h-[300px] border rounded-[14px] my-2 flex items-center flex-col hover:cursor-pointer hover:scale-[1.02] transition-all duration-300 hover:shadow-md">
            <div className="w-[95%] border rounded-md mt-1 h-[150px]" />
            <div className="flex items-center w-[95%] mt-2">
              <div className="w-[30px] h-[30px] rounded-md border mr-2" />
              <p className="text-[14px] tracking-wide">IBM</p>
            </div>
            <div className="w-[95%] font-medium mt-1">IBM Data Science</div>
            <div className="flex items-center w-[95%] text-[blue] mt-1">
              <TbCertificate size={20} className="mr-2 " /> Build toward a
              degree
            </div>
            <div className="mt-1 w-[95%] text-[#6d6d6d] text-[15px]">
              Personal Certificate
            </div>
          </div>
          <div className="flex items-center">
            <div className="px-5 py-3 rounded-md bg-[blue] text-white">
              Show 8 more
            </div>
            <div className="flex items-center ml-3 px-5 py-3 rounded-md text-[blue] border border-[blue]">
              View All <FaArrowRight className="ml-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collaborate;

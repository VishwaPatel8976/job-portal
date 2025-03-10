import { viewApplicationsPageData } from "../assets/assets"


const ViewApplications = () => {
  return (
    <div className="container mx-auto p-5 ">
      <div>
        <table className="w-full max-w-4xl bg-amber-50 border-2 border-gray-200 max-sm:text-sm ">
          <thead>
            <tr className="shadow-md bg-amber-100 text-blue-900 h-10">
               <th className="py-2  px-4 text-left">#</th>
               <th className="py-2 px-4 text-left" >User Name</th>
               <th className="py-2 px-4 text-left max-sm:hidden">Job Title</th>
               <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
               <th className="py-2 px-4 text-left">Resume</th>
               <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant,index)=>(
              
              <tr key={index} className="text-gray-700">
                <td className="py-2 px-4 border-b text-center">{index+1} </td>
                <td>
                  <img src={applicant.imgSrc} alt="" />
                  <span>{applicant.name}</span>
                </td>
                <td>
                  <td>{applicant.jobTitle}</td>
                  <td>{applicant.location}</td>
                  <td>
                    <a href="" target="_blank">
                      Resume <img src="/src/assets/resume_download_icon.svg" alt="" />
                    </a>
                  </td>

                  <td>
                    <div>
                      <button>...</button>
                    <div>
                       <button>Accept</button>
                        <button>Reject</button>
  
                    </div>
                    </div>
                  </td>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewApplications
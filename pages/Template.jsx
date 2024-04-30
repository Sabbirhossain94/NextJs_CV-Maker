import React from 'react'
import { useContext, useRef } from 'react'
import { DataContext } from './CVBuilder'
import { Email, Phone, Location } from '../components/SvgComponents/SVG';
import { months, parseDescription, parseProjectDetails, parseActivityDetails } from '../components/helpers/helpers';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';

function Template() {
    const targetRef = useRef();
    const { imageUrls, personalInformation, summary, employment, education, socials, skills, project, extraCurricular, languages, hobbies, reference, skillExpLevel } = useContext(DataContext);
    const [{ firstname, lastname, email, phone, country, city, occupation, address }] = personalInformation[0]
    const [picture] = imageUrls[0];
    const [{ summary: about }] = summary[0];
    const [showExpLevel] = skillExpLevel;
    const { hobbies: interests } = hobbies[0]

    const options = {
        method: 'open',
        resolution: Resolution.EXTREME,
        page: {
            margin: Margin.SMALL,
            format: 'letter',
            orientation: 'landscape',
        },
        canvas: {
            mimeType: 'image/png',
            qualityRatio: 1
        },
        overrides: {
            pdf: {
                compress: true
            },
            canvas: {
                useCORS: true
            }
        },
    };


    return (
        <div className="bg-white p-4 ">
            <div ref={targetRef} className="border-1 shadow-lg shadow-gray-700 min-h-screen">
                <div className="flex w-full  bg-slate-800 sm:px-2 gap-10">
                    <div className="left-5 top-10 h-40 w-40 overflow-hidden p-3 sm:relative sm:rounded-full sm:p-0">
                        <img src={picture ? picture : `images/dummy.png`} />
                    </div>

                    <div className="mt-10 w-3/4 text-start sm:text-left flex justify-between items-center">
                        <div className='flex flex-col'>
                            <p className="font-poppins text-heading text-2xl font-bold text-white sm:text-4xl">{firstname} {lastname}</p>
                            <p className="text-heading text-white">{occupation}</p>
                        </div>
                        {/* <div className=''>
                            {socials?.[0] && socials?.[0].map((social, index) => (
                                <a href={social.linkurl} className="flex gap-2 items-center text-heading text-white">
                                    {social.icon}  {social.linkurl.replace(/^https?:\/\/(www\.)?/, '')}
                                </a>
                            ))}
                        </div> */}
                    </div>
                </div>

                <div className="p-5">
                    <div className="flex flex-col sm:mt-10 sm:flex-row gap-10">
                        <div className="flex flex-col sm:w-1/3">
                            {/* contact section */}
                            <div className="order-3 py-3 sm:order-none">
                                <h2 className="font-poppins text-top-color text-lg font-bold">Contact</h2>
                                <div className="border-top-color my-3 w-20 border-2"></div>

                                <div className='flex flex-col'>
                                    <div className="my-1 flex items-center">
                                        {email && <a className="w-6 text-gray-700 hover:text-orange-600 whitespace-nowrap"
                                        >
                                            <Email />
                                        </a>}
                                        <div className="truncate">{email}</div>
                                    </div>
                                    <div className="my-1 flex items-center">
                                        {phone && <a className="w-6 text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href="" target="_blank"
                                        >
                                            <Phone />
                                        </a>}
                                        <div>{phone}</div>
                                    </div>
                                    <div className="my-1 flex items-start">
                                        <a className="w-6 text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Facebook" href="" target="_blank"
                                        >

                                            {address || city || country ? <Location /> : ""}
                                        </a>
                                        <p className='pl-1 pb-1'>{address || city || country ? address + "," + " " + city + "," + " " + country : ""}</p>
                                    </div>
                                </div>
                            </div>

                            {/* skills section */}
                            <div className="order-2 py-3 sm:order-none">
                                <h2 className="font-poppins text-top-color text-lg font-bold">Skills</h2>
                                <div className="border-top-color my-3 w-20 border-2"></div>
                                <>
                                    {showExpLevel ? (skills?.[0] && skills?.[0].map((item, index) => (
                                        <div key={index} className="my-1 flex items-center justify-between">
                                            <div className="ml-2">{item.skill}</div>
                                            <div>{item.level} </div>
                                        </div>
                                    ))) : <div className='flex gap-2 flex-wrap'>
                                        {skills?.[0].some((entry) => Object.values(entry).some((item) => item !== "")) && skills?.[0].map((item, index) => (
                                            <div key={index} className="bg-slate-800 flex justify-center items-center border flex-wrap rounded-md">
                                                <p className="px-3 py-1 text-sm text-white">{item.skill}</p>
                                            </div>
                                        ))}
                                    </div>}
                                </>
                            </div>

                            <div className="order-3 py-3 sm:order-none">
                                <h2 className="font-poppins text-top-color text-lg font-bold">Social Links</h2>
                                <div className="border-top-color my-3 w-20 border-2"></div>
                                <div className='pt-1 flex flex-col gap-2'>
                                    {socials?.[0] && socials?.[0].map((social, index) => (
                                        <a href={social.linkurl} className="flex gap-2 justify-start items-center">
                                            {/* <span className='mt-1'> */}
                                            {social.icon} 
                                            {social.label}
                                            
                                            {/* </span> */}
                                            {/* <span className=''>
                                                {social.linkurl.replace(/^https?:\/\/(www\.)?/, '')}
                                            </span> */}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {
                                languages?.[0].some((entry) => Object.values(entry).some((item) => item !== "")) && <div className="order-3 py-3 sm:order-none">
                                    <h2 className="font-poppins text-top-color text-lg font-bold">Languages</h2>
                                    <div className="border-top-color my-3 w-20 border-2"></div>
                                    <div className='pt-1 flex flex-wrap items-center gap-2'>
                                        {languages?.[0] && languages?.[0].map((item, index) => (
                                            <div key={index} className='w-full'>
                                                <p className='w-full flex justify-between'>{item.language} <span className='text-sm italic text-gray-500'>{item.level}</span></p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }

                            {interests && <div className="order-2 py-3 sm:order-none">
                                <h2 className="font-poppins text-top-color text-lg font-bold">Interests</h2>
                                <div className="border-top-color my-3 w-20 border-2"></div>
                                <div className='flex flex-wrap gap-2'>
                                    {interests.split(",").map((item, index) => (
                                        <div key={index} className="bg-slate-800 flex items-center border flex-wrap rounded-md">
                                            <p className="px-3 py-1 text-sm text-white">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            }

                        </div>

                        <div className="order-first flex flex-col sm:order-none sm:w-2/3">
                            <div className="py-3">
                                <h2 className="font-poppins text-top-color text-lg font-bold">About</h2>
                                <div className="border-top-color my-3 w-20 border-2"></div>
                                <p>{about}</p>
                            </div>

                            <div className="py-3">
                                <h2 className="font-poppins text-top-color text-lg font-bold">Experience</h2>
                                <div className="border-top-color my-3 w-20 border-2"></div>

                                <div className="flex flex-col">
                                    {employment?.[0] && employment?.[0].map((job, index) => (
                                        <div key={index} className="flex flex-col">
                                            {job.employer && job.jobtitle ? <p className="text-lg font-bold text-gray-700">{job.employer} | {job.jobtitle}</p> : null}
                                            {job.startdate && job.enddate ? <p className="text-sm font-semibold text-gray-700">{months[Number(job.startdate.split("-")[1])]} {job.startdate.split("-")[0]} - {months[Number(job.enddate.split("-")[1])]} {job.enddate.split("-")[0]}</p> : null}
                                            {job.description && (
                                                <>
                                                    <p className="mb-1 mt-2 text-sm font-semibold text-gray-700">{job.description !== "<p><br></p>" && "Key Responsibilities"}</p>
                                                    <ul className="list-disc space-y-1 pl-4 text-sm">
                                                        {job.description && parseDescription(job.description)}
                                                    </ul>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="order-1 py-3 sm:order-none">
                                <h2 className="font-poppins text-top-color text-lg font-bold">Education</h2>
                                <div className="border-top-color my-3 w-20 border-2"></div>

                                <div className="flex flex-col space-y-2">
                                    {education?.[0] && education?.[0].map((edc, index) => (
                                        <div className="flex flex-col">
                                            {edc.degree && edc.institution && edc.institutioncity ? <p className="text-lg font-medium">
                                                <span className="text-green-700">{edc.degree}</span>
                                                , {edc.institution}, {edc.institutioncity}.</p> : null}
                                            {edc.startdate || edc.enddate ? <p className="text-sm font-semibold text-gray-700">{edc.startdate} - {edc.enddate}</p> : null}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {
                                project?.[0].some((entry) => Object.values(entry).some((item) => item !== "")) && <div className="py-3">
                                    <h2 className="font-poppins text-top-color text-lg font-bold">Projects</h2>
                                    <div className="border-top-color my-3 w-20 border-2"></div>

                                    <div className="flex flex-col ">
                                        {project?.[0] && project?.[0].map((pro, index) => (
                                            <div key={index} className="flex flex-col">
                                                <p className="text-lg font-bold text-gray-700">{pro.projecttitle}</p>
                                                {pro.startdate && pro.enddate ? <p className="text-sm font-bold text-gray-700">{pro.startdate} - {pro.enddate}</p> : null}
                                                {pro.description && (
                                                    <div className='py-2'>
                                                        <ul className="list-disc space-y-1 pl-4 text-sm">
                                                            {pro.description && parseProjectDetails(pro.description)}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }

                            {
                                extraCurricular?.[0].some((entry) => Object.values(entry).some((item) => item !== "")) && <div className="py-3">
                                    <h2 className="font-poppins text-top-color text-lg font-bold">Extra Currricular Activites</h2>
                                    <div className="border-top-color my-3 w-20 border-2"></div>

                                    <div className="flex flex-col ">
                                        {extraCurricular?.[0] && extraCurricular?.[0].map((item, index) => (
                                            <div key={index} className="flex flex-col">
                                                {item.role && item.activity && item.institution ? <p className="text-lg font-bold text-gray-700">{item.role} | {item.activity} | {item.institution}</p> : null}
                                                {item.startdate && item.enddate ? <p className="text-sm font-bold text-gray-700">{months[Number(item.startdate.split("-")[1])]} {item.startdate.split("-")[0]} - {months[Number(item.enddate.split("-")[1])]} {item.enddate.split("-")[0]}</p> : null}
                                                {item.description && (
                                                    <div className='py-2'>
                                                        <ul className="list-disc space-y-1 pl-4 text-sm">
                                                            {item.description && parseActivityDetails(item.description)}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }

                            {
                                reference?.[0].some((entry) => Object.values(entry).some((item) => item !== "")) && <div className="order-1 py-3 sm:order-none">
                                    <h2 className="font-poppins text-top-color text-lg font-bold">References</h2>
                                    <div className="border-top-color my-3 w-20 border-2"></div>

                                    <div className="flex flex-col space-y-2">
                                        {reference?.[0] && reference?.[0].map((ref, index) => (
                                            <div key={index} className="flex flex-col">
                                                <p className="text-lg font-medium">
                                                    <span className="text-gray-700">{ref.referrername} - {ref.position} , {ref.organization}</span>
                                                </p>
                                                {ref.address && ref.email && ref.phone ? <p className="text-sm font-normal text-gray-700">{ref.address} , {ref.email}, {ref.phone}</p> : null}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <button onClick={() => generatePDF(targetRef, { filename: 'page.pdf' }, options)} className='bg-slate-800 text-white p-2 rounded-md py-2'>Download PDF</button>
            </div>
        </div >

    )
}

export default Template
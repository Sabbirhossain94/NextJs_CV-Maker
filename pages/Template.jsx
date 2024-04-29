import React from 'react'
import { useContext } from 'react'
import { DataContext } from './CVBuilder'

function Template() {
    const { image, imageUrls, personalInformation, summary, employment, education, socials, skills, course, extraCurricular, languages, hobbies } = useContext(DataContext);
    const [{ firstname, lastname, email, phone, country, city, occupation, address, postalcode, nationality, placeofbirth, dateofbirth, }] = personalInformation[0]
    const [picture] = imageUrls[0];
    const [{ summary: about }] = summary[0];

    const parseDescription = (description) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(description, 'text/html');
        const listItems = doc.querySelectorAll('li');
        return Array.from(listItems).map((item, index) => (
            <li key={index}>{item.textContent}</li>
        ));
    };

    return (
        <div className="bg-white p-4 ">
            <div className="border-1 rounded-lg shadow-lg shadow-gray-700 min-h-screen">
                <div className="flex w-full rounded-t-lg bg-slate-800 sm:px-2 gap-10">
                    <div className="left-5 top-10 h-40 w-40 overflow-hidden p-3 sm:relative sm:rounded-full sm:p-0">
                        <img src={picture ? picture : `images/dummy.png`} />
                    </div>

                    <div className="mt-10 w-3/4 text-start sm:text-left flex flex-col justify-center">
                        <p className="font-poppins text-heading text-2xl font-bold text-white sm:text-4xl">{firstname} {lastname}</p>
                        <p className="text-heading text-white">{occupation}</p>
                        {/* <p className="text-heading text-white">{occupation}</p> */}

                    </div>
                </div>

                <div className="p-5">
                    <div className="flex flex-col sm:mt-10 sm:flex-row gap-10">
                        <div className="flex flex-col sm:w-1/3 ">
                            {/* contact section */}
                            <div className="order-3 py-3 sm:order-none">
                                <h2 className="font-poppins text-top-color text-lg font-bold">Contact</h2>
                                <div className="border-top-color my-3 w-20 border-2"></div>

                                <div className='flex flex-col'>
                                    <div className="my-1 flex items-center">
                                        {email && <a className="w-6 text-gray-700 hover:text-orange-600 whitespace-nowrap"
                                        >
                                            <svg className="w-4 h-4" fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Gmail icon</title><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />
                                            </svg>
                                        </a>}
                                        <div className="truncate">{email}</div>
                                    </div>
                                    <div className="my-1 flex items-center">
                                        {phone && <a className="w-6 text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href="" target="_blank"
                                        >
                                            <svg className='h-4 w-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#1C274C" />
                                            </svg>
                                        </a>}
                                        <div>{phone}</div>
                                    </div>
                                    <div className="my-1 flex items-start">
                                        <a className="w-6 text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Facebook" href="" target="_blank"
                                        >

                                            {address || city || country ? <svg className='h-4 w-4 text-red-500 mt-1' version="1.0" id="Layer_1"
                                                viewBox="0 0 64 64" enable-background="new 0 0 64 64" >
                                                <path fill="#000000" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/>
                                            </svg> : ""}
                                        </a>
                                        <p className='pl-1 pb-1'>{address || city || country ? address + "," + " " + city + "," + " " + country : ""}</p>
                                    </div>

                                    {/* twitter icon */}
                                    {/* <div className="my-1 flex items-center">
                                        <a className="w-6 text-gray-700 hover:text-orange-600" aria-label="Visit TrendyMinds Twitter" href="" target="_blank"
                                        >
                                            <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </svg>
                                        </a>
                                        <div>amitpachange21</div>
                                    </div> */}
                                </div>
                            </div>

                            {/* skills section */}
                            <div className="order-2 py-3 sm:order-none">
                                <h2 className="font-poppins text-top-color text-lg font-bold">Skills</h2>
                                <div className="border-top-color my-3 w-20 border-2"></div>
                                <>
                                    {skills?.[0] && skills?.[0].map((item, index) => (
                                        <div className="my-1 flex items-center justify-between">
                                            <div className="ml-2">{item.skill}</div>
                                            <div>{item.level} </div>
                                        </div>
                                    ))}
                                </>
                            </div>

                            <div className="order-3 py-3 sm:order-none">
                                <h2 className="font-poppins text-top-color text-lg font-bold">Website & Links</h2>
                                <div className="border-top-color my-3 w-20 border-2"></div>
                                <div className='pt-1 flex flex-col gap-2'>
                                    {socials?.[0] && socials?.[0].map((social, index) => (
                                        <a href={social.linkurl} className="flex gap-2 items-start">
                                            <span className='mt-1'>{social.icon}</span>
                                            <span className=''>
                                                {social.linkurl.replace(/^https?:\/\/(www\.)?/, '')}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="order-first flex flex-col sm:order-none sm:-mt-10 sm:w-2/3">
                            <div className="py-3">
                                <h2 className="font-poppins text-top-color text-lg font-bold">About Me</h2>
                                <div className="border-top-color my-3 w-20 border-2"></div>
                                <p>{about}</p>
                            </div>

                            <div className="py-3">
                                <h2 className="font-poppins text-top-color text-lg font-bold">Professional Experience</h2>
                                <div className="border-top-color my-3 w-20 border-2"></div>

                                <div className="flex flex-col">
                                    {employment?.[0] && employment?.[0].map((job, index) => (
                                        <div key={index} className="flex flex-col">
                                            {job.employer && job.jobtitle ? <p className="text-lg font-bold text-gray-700">{job.employer} | {job.jobtitle}</p> : null}
                                            {job.startdate && job.enddate ? <p className="text-sm font-semibold text-gray-700">{job.startdate} - {job.enddate}</p> : null}
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
                                <h2 className="font-poppins text-top-color text-lg font-bold">Education Background</h2>
                                <div className="border-top-color my-3 w-20 border-2"></div>

                                <div className="flex flex-col space-y-2">
                                    {education?.[0] && education?.[0].map((edc, index) => (
                                        <div className="flex flex-col">
                                            {edc.degree && edc.institution && edc.institutioncity ? <p className="text-sm font-medium">
                                                <span className="text-green-700">{edc.degree}</span>
                                                , {edc.institution}, {edc.institutioncity}.</p> : null}
                                            {edc.startdate || edc.enddate ? <p className="text-xs font-semibold text-gray-700">{edc.startdate} - {edc.enddate}</p> : null}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="py-3">
                                <h2 className="font-poppins text-top-color text-lg font-bold">Projects</h2>
                                <div className="border-top-color my-3 w-20 border-2"></div>

                                <div className="flex flex-col ">
                                    <div className="flex flex-col">
                                        <p className="text-lg font-bold text-gray-700">Netcracker Technology | Software Engineer</p>
                                        <ul className="list-disc space-y-1 pl-6 py-2 text-sm ">
                                            <li>Working on customer facing product</li>
                                            <li>Deliverying highly efficient solutions</li>
                                            <li>Solving critical bugs</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Template
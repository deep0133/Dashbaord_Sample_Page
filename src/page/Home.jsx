import { Bar } from "react-chartjs-2";
import { AreaChart } from "../components/AreaChart";
import { data, options } from "../components/BarChart";

export default function Home() {
  return (
    <section className='responsive-width mt-5'>
      <div className='report mt-3 mb-5'>
        <h2 className='text-xl font-medium'>Campaign Report</h2>
        <p className='text-gray-500'>
          Any Special Route You Want To Cover In This Campaign
        </p>
      </div>
      <div className='campaign-name grid grid-cols-2 gap-8'>
        <div className='left-side border'>
          <div className='first grid grid-cols-2 *:px-5 *:py-2'>
            <p className='campaign border-r border-b bg-gray-50'>
              Campaign Name
            </p>
            <p className='campaign border-b '>Surf excel</p>
          </div>
          <div className='second grid grid-cols-2 *:px-5 *:py-2'>
            <p className='campaign border-r bg-gray-50'>Campaign Type</p>
            <p className='campaign'>Regular</p>
          </div>
        </div>
        <div className='right-side border'>
          <div className='first grid grid-cols-2 *:px-5 *:py-2'>
            <p className='campaign border-r border-b bg-gray-50'>
              Campaign Name
            </p>
            <p className='campaign border-b'>Surf excel</p>
          </div>
          <div className='second grid grid-cols-2 *:px-5 *:py-2'>
            <p className='campaign border-r bg-gray-50'>Campaign Type</p>
            <p className='campaign'>Regular</p>
          </div>
        </div>
      </div>
      <div className='card-container mt-8 *:border *:rounded-md grid grid-cols-4 gap-5'>
        <div className='card-1 py-8 flex-col relative flex items-center justify-center'>
          <div className='absolute top-3 left-3 rounded-full bg-gray-50 flex justify-center items-center size-12'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605'
              />
            </svg>
          </div>
          <h2 className='text-2xl font-bold'>45</h2>
          <span className='text-gray-500'>Total Screens</span>
        </div>
        <div className='card-1 py-8 flex-col relative flex items-center justify-center'>
          <div className='absolute top-3 left-3 rounded-full bg-gray-50 flex justify-center items-center size-12'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605'
              />
            </svg>
          </div>
          <h2 className='text-2xl font-bold'>2Cr</h2>
          <span className='text-gray-500'>Total Cost</span>
        </div>
        <div className='card-1 py-8 flex-col relative flex items-center justify-center'>
          <div className='absolute top-3 left-3 rounded-full bg-gray-50 flex justify-center items-center size-12'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605'
              />
            </svg>
          </div>
          <h2 className='text-2xl font-bold'>100K</h2>
          <span className='text-gray-500'>Impressions Promised</span>
        </div>
        <div className='card-1 py-8 flex-col relative flex items-center justify-center'>
          <div className='absolute top-3 left-3 rounded-full bg-gray-50 flex justify-center items-center size-12'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605'
              />
            </svg>
          </div>
          <h2 className='text-2xl font-bold'>4500</h2>
          <span className='text-gray-500'>Total Slots</span>
        </div>
      </div>

      <div className='mt-12 space-y-5'>
        <div className='line1 grid grid-cols-12 gap-8 items-end'>
          <h4 className='col-span-3 font-medium '>Duration</h4>
          <div className='col-span-9 '>
            <h3 className='mb-2 text-gray-500 font-medium'>1 Sept</h3>
            <ChartLine val={50} />
          </div>
        </div>
        <div className='line2 grid grid-cols-12 gap-8 items-end'>
          <h4 className='col-span-3 font-medium  '>Impressions</h4>
          <div className='col-span-9'>
            <h3 className='mb-2 text-gray-500 font-medium'>90%</h3>
            <ChartLine val={90} />
          </div>
        </div>
      </div>

      <div className='touch-point-cantainer border border-t-0 mt-12 pb-6 space-y-3'>
        <div className='col-1 grid grid-cols-12 px-8 gap-5 py-2  rounded-t-md bg-blue-400'>
          <h3 className='text-white col-span-3'>Touchpoint</h3>
          <div className='text-white col-span-5 flex justify-center items-center'>
            Performance
          </div>
          <h3 className='text-white col-span-2 text-center'>
            online reporting
          </h3>
          <h3 className='text-white col-span-2 text-center'>
            offline reporting
          </h3>
        </div>
        <div className='col-1 px-8 grid grid-cols-12 gap-5 py-2 '>
          <h3 className=' col-span-3'>Premium High Street</h3>
          <div className='col-span-5'>
            <ChartLine val={80} />
          </div>
          <h3 className='col-span-2 text-center'>80%</h3>
          <h3 className='col-span-2 text-center'>20%</h3>
        </div>
        <div className='col-1 px-8 grid grid-cols-12 gap-5 py-2 '>
          <h3 className=' col-span-3'>Neighborhood premium Mail</h3>
          <div className='col-span-5'>
            <ChartLine val={70} />
          </div>
          <h3 className='col-span-2 text-center'>70%</h3>
          <h3 className='col-span-2 text-center'>30%</h3>
        </div>
        <div className='col-1 px-8 grid grid-cols-12 gap-5 py-2 '>
          <h3 className=' col-span-3'>Golf Cource</h3>
          <div className='col-span-5'>
            <ChartLine val={30} />
          </div>
          <h3 className='col-span-2 text-center'>30%</h3>
          <h3 className='col-span-2 text-center'>70%</h3>
        </div>
        <div className='col-1 px-8 grid grid-cols-12 gap-5 py-2 '>
          <h3 className=' col-span-3'>Arterial Route</h3>
          <div className='col-span-5'>
            <ChartLine val={60} />
          </div>
          <h3 className='col-span-2 text-center'>60%</h3>
          <h3 className='col-span-2 text-center'>40%</h3>
        </div>
        <div className='col-1 px-8 grid grid-cols-12 gap-5 py-2 '>
          <h3 className=' col-span-3'>Feeder Route</h3>
          <div className='col-span-5'>
            <ChartLine val={80} />
          </div>
          <h3 className='col-span-2 text-center'>80%</h3>
          <h3 className='col-span-2 text-center'>20%</h3>
        </div>
      </div>

      <div className='total-spending mt-16'>
        <div className='row-1 grid grid-cols-12 gap-5 py-2 px-3'>
          <h3 className='col-span-3 font-medium'>Total Spending</h3>
          <div className='col-span-9'>
            <ChartLine val={70} />
          </div>
        </div>
        <div className='row-2 grid grid-cols-12 gap-5 py-2 px-3 items-center'>
          <h3 className='col-span-3 font-medium'>Day Wise Analysis</h3>
          <div className='col-span-9 h-36 w-full border-2 border-gray-200 rounded-lg p-3'>
            <AreaChart />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-12 gap-5 py-2 px-3'>
        <div className='col-span-8'>
          {/* <Bar options={options} data={data} /> */}
        </div>
      </div>

      <div className='mt-16 pb-16'>
        <h1 className='text-xl font-semibold text-gray-900'>Screen Report</h1>
        <div className='mt-8 flex flex-col'>
          <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-300'>
                  <thead className='bg-blue-100'>
                    <tr>
                      <th
                        scope='col'
                        className='whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                      >
                        <input type='checkbox' checked={false} disabled />
                      </th>
                      <th
                        scope='col'
                        className='whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                      >
                        Screen Name
                      </th>
                      <th
                        scope='col'
                        className='whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        City
                      </th>
                      <th
                        scope='col'
                        className='whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Media Type
                      </th>
                      <th
                        scope='col'
                        className='whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Cost
                      </th>
                      <th
                        scope='col'
                        className='whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Status
                      </th>
                      <th
                        scope='col'
                        className='whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Delivery
                      </th>
                      <th
                        scope='col'
                        className='whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Creative
                      </th>
                      <th
                        scope='col'
                        className='relative whitespace-nowrap font-semibold py-3.5 pl-3 pr-4 sm:pr-6'
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 bg-white'>
                    {dataList.map((val, i) => (
                      <tr key={i}>
                        <td className='whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6'>
                          <input
                            type='checkbox'
                            name=''
                            checked={val?.checked}
                            className='accent-blue-500'
                          />
                        </td>

                        <td className='whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900'>
                          {val?.name}
                        </td>
                        <td className='whitespace-nowrap px-2 py-2 text-sm text-gray-900'>
                          {val?.city}
                        </td>
                        <td className='whitespace-nowrap px-2 py-2 text-sm text-gray-500'>
                          {val?.media}
                        </td>
                        <td className='whitespace-nowrap px-2 py-2 text-sm text-gray-500'>
                          {val?.cost}
                        </td>
                        <td className='whitespace-nowrap px-2 py-2 text-sm text-gray-500'>
                          {val?.status}
                        </td>
                        <td className='whitespace-nowrap px-2 py-2 text-sm text-gray-500'>
                          {val?.delivery}
                        </td>
                        <td className='relative whitespace-nowrap  py-2 pl-3 pr-4 text-sm font-medium sm:pr-6'>
                          <img
                            src={val?.url}
                            className='size-8 rounded-full'
                            alt=''
                          />
                        </td>
                        <td className='relative text-center whitespace-nowrap font-semibold py-3.5 pl-3 pr-4 sm:pr-6'>
                          ...
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line
const ChartLine = ({ val }) => {
  return (
    <div className='h-2 w-full bg-gray-100'>
      <div
        className='h-2 bg-blue-400'
        style={{
          width: val + "%",
        }}
      ></div>
    </div>
  );
};

const dataList = [
  {
    id: "AAPS0L",
    checked: false,
    name: "Road Segment - A",
    city: "Gurgaon",
    media: "Connected",
    cost: "78900",
    status: "Active",
    delivery: "80%",
    url: "https://th.bing.com/th/id/R.5d0562080ff9a563b99b41a980a385e3?rik=FvavN9ema7GzPg&riu=http%3a%2f%2fpetapixel.com%2fassets%2fuploads%2f2019%2f02%2fdownload-2-800x800.jpeg&ehk=6tYvl0vWgGztb0h1tKXc264agdodqpp7TsF7hOEExNE%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: "AAPS0L",
    checked: true,
    name: "Road Segment - A",
    city: "Gurgaon",
    media: "Connected",
    cost: "78900",
    status: "Active",
    delivery: "80%",
    url: "https://th.bing.com/th/id/R.5d0562080ff9a563b99b41a980a385e3?rik=FvavN9ema7GzPg&riu=http%3a%2f%2fpetapixel.com%2fassets%2fuploads%2f2019%2f02%2fdownload-2-800x800.jpeg&ehk=6tYvl0vWgGztb0h1tKXc264agdodqpp7TsF7hOEExNE%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: "AAPS0L",
    checked: false,
    name: "Road Segment - A",
    city: "Gurgaon",
    media: "Connected",
    cost: "78900",
    status: "Active",
    delivery: "80%",
    url: "https://th.bing.com/th/id/R.5d0562080ff9a563b99b41a980a385e3?rik=FvavN9ema7GzPg&riu=http%3a%2f%2fpetapixel.com%2fassets%2fuploads%2f2019%2f02%2fdownload-2-800x800.jpeg&ehk=6tYvl0vWgGztb0h1tKXc264agdodqpp7TsF7hOEExNE%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: "AAPS0L",
    checked: false,
    name: "Road Segment - A",
    city: "Gurgaon",
    media: "Connected",
    cost: "78900",
    status: "Active",
    delivery: "80%",
    url: "https://th.bing.com/th/id/R.5d0562080ff9a563b99b41a980a385e3?rik=FvavN9ema7GzPg&riu=http%3a%2f%2fpetapixel.com%2fassets%2fuploads%2f2019%2f02%2fdownload-2-800x800.jpeg&ehk=6tYvl0vWgGztb0h1tKXc264agdodqpp7TsF7hOEExNE%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: "AAPS0L",
    checked: false,
    name: "Road Segment - A",
    city: "Gurgaon",
    media: "Connected",
    cost: "78900",
    status: "Active",
    delivery: "80%",
    url: "https://th.bing.com/th/id/R.5d0562080ff9a563b99b41a980a385e3?rik=FvavN9ema7GzPg&riu=http%3a%2f%2fpetapixel.com%2fassets%2fuploads%2f2019%2f02%2fdownload-2-800x800.jpeg&ehk=6tYvl0vWgGztb0h1tKXc264agdodqpp7TsF7hOEExNE%3d&risl=&pid=ImgRaw&r=0",
  },
];

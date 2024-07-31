import React, { useState } from 'react'
import Layout from "../../components/layout/Layout";

const KnowYourSoil = () => {
  const [soilData, setSoilData] = useState({
    pH: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    organicMatter: '',
    moisture: ''
  })

  const [report, setReport] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleChange = (e) => {
    setSoilData({ ...soilData, [e.target.name]: e.target.value })
  }

  const generateReport = (data) => {
    let health = 'Good'
    let recommendations = []

    if (data.pH < 6 || data.pH > 7.5) {
      health = 'Poor'
      recommendations.push('Consider adjusting soil pH through liming or adding sulfur.')
    }

    if (data.nitrogen < 20) {
      health = 'Poor'
      recommendations.push('Increase nitrogen levels through fertilization or planting nitrogen-fixing crops.')
    }

    if (data.phosphorus < 20) {
      health = 'Poor'
      recommendations.push('Boost phosphorus levels with phosphate fertilizers or organic matter.')
    }

    if (data.potassium < 20) {
      health = 'Poor'
      recommendations.push('Enhance potassium levels with potash fertilizers or organic compost.')
    }

    if (data.organicMatter < 3) {
      health = health === 'Good' ? 'Fair' : 'Poor'
      recommendations.push('Improve organic matter content by adding compost or using cover crops.')
    }

    if (data.moisture < 20 || data.moisture > 60) {
      health = health === 'Good' ? 'Fair' : 'Poor'
      recommendations.push('Optimize irrigation practices to maintain proper soil moisture levels.')
    }

    return { health, recommendations }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const reportData = generateReport(soilData)
    setReport(reportData)
    setShowModal(true)
  }

  return (
    
      <Layout>
      <div className="pt-5">
        <div 
          className='bg-cover h-96 relative bg-[url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQEJNBMA-y5EUlFy0RIUwEMCAKLZaqX3X35KgFJmL-s1j4Uz8R5")]'
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl font-bold mb-6">Know Your Soil</h1>
              <p className="mb-4">
                Enter your soil data to get an instant soil health report.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-semibold mb-4">Enter Soil Data</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pH">
                    Soil pH (0-14)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="pH"
                    type="number"
                    step="0.1"
                    name="pH"
                    value={soilData.pH}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nitrogen">
                    Nitrogen (ppm)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nitrogen"
                    type="number"
                    name="nitrogen"
                    value={soilData.nitrogen}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phosphorus">
                    Phosphorus (ppm)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phosphorus"
                    type="number"
                    name="phosphorus"
                    value={soilData.phosphorus}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="potassium">
                    Potassium (ppm)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="potassium"
                    type="number"
                    name="potassium"
                    value={soilData.potassium}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organicMatter">
                    Organic Matter (%)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="organicMatter"
                    type="number"
                    step="0.1"
                    name="organicMatter"
                    value={soilData.organicMatter}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="moisture">
                    Soil Moisture (%)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="moisture"
                    type="number"
                    step="0.1"
                    name="moisture"
                    value={soilData.moisture}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Generate Soil Health Report
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        {showModal && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center px-4" id="my-modal">
              <div className="relative mx-auto p-5 border w-full max-w-md h-auto shadow-lg rounded-md bg-white">
                <div className="mt-3">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">Soil Health Report</h3>
                  <div className="mt-2 px-2 py-3">
                    <p className="text-3xl text-black mb-3">
                      Overall Health: <span className="font-bold">{report.health}</span>
                    </p>
                    <div className="mt-4">
                      <h4 className="text-md font-medium text-gray-900 mb-2">Recommendations:</h4>
                      <ul className="list-disc pl-5 text-lg text-gray-500 space-y-1">
                        {report.recommendations.map((rec, index) => (
                          <li key={index} className="break-words">{rec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="items-center px-2 py-3">
                    <button
                      id="ok-btn"
                      className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Layout>
    
  )
}

export default KnowYourSoil

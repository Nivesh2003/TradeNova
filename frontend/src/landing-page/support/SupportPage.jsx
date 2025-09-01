import React from 'react'

function SupportPage() {
  return (
    <>
      <div className="container">

        {/* Hero starts */}
        <div className="row p-5 mt-5 mb-5">

        </div>
        {/* Hero ends */}

        {/* Create ticket section */}
        <div className="row p-5 mt-5 mb-5">
          <h1 className="text-center fs-2">Choose an option to create ticket</h1>
          <br />
        </div>
        <div className="row">

          <div className="col-6 p-5 mb-5">
            <h4><i class="fa-solid fa-circle-plus"></i> Account Opening</h4>

            <a style={{textDecoration:'none'}} href="/support/tickets/new?category=documents">Upload / Missing Documents</a>
            <br /><br />
            <a style={{textDecoration:'none'}} href="/support/tickets/new?category=application">Issues While Applying</a>
            <br /><br />
            <a style={{textDecoration:'none'}} href="/support/tickets/new?category=types">Account Type Selection</a>
            <br /><br />
            <a style={{textDecoration:'none'}} href="/support/tickets/new?category=eligibility">Eligibility Queries</a>
            <br /><br />
            <a style={{textDecoration:'none'}} href="/support/tickets/new?category=kyc">KYC Verification Issues</a>
            <br /><br />
          </div>


          <div className="col-6 p-5 mb-5">
            <h4><i class="fa-solid fa-circle-plus"></i> Account Opening</h4>

            <a style={{textDecoration:'none'}} href="/support/tickets/new?category=documents">Upload / Missing Documents</a>
            <br /><br />
            <a style={{textDecoration:'none'}} href="/support/tickets/new?category=application">Issues While Applying</a>
            <br /><br />
            <a style={{textDecoration:'none'}} href="/support/tickets/new?category=types">Account Type Selection</a>
            <br /><br />
            <a style={{textDecoration:'none'}} href="/support/tickets/new?category=eligibility">Eligibility Queries</a>
            <br /><br />
            <a style={{textDecoration:'none'}} href="/support/tickets/new?category=kyc">KYC Verification Issues</a>
            <br /><br />
          </div>
        </div>
        {/* Create ticket section */}
      </div>
    </>
  )
}

export default SupportPage
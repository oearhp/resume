import { useState } from "react";

const testCases = [
    {
        id: 'TC_AUTH_001',
        description: 'Successful Token Generation with Valid Credentials',
        tool: 'Playwright',
        status: 'NO RUN'
    },
    {
        id: 'TC_AUTH_002',
        description: 'Authentication Failure with Invalid Password',
        tool: 'Playwright',
        status: 'NO RUN'
    },
    {
        id: 'TC_BOOKING_001',
        description: 'Create Booking with Standard Valid Payload',
        tool: 'Playwright',
        status: 'NO RUN'
    },
    {
        id: 'TC_BOOKING_002',
        description: 'Zero-Value Total Price Verification',
        tool: 'Playwright',
        status: 'NO RUN'
    },
    {
        id: 'TC_BOOKING_003',
        description: 'Rejection of Missing Mandatory Fields',
        tool: 'Playwright',
        status: 'NO RUN'
    },
    {
        id: 'TC_GET_001',
        description: 'Retrieve Existing Booking by Valid ID',
        tool: 'Playwright',
        status: 'NO RUN'
    },
    {
        id: 'TC_GET_002',
        description: 'Attempt Retrieval with Non-Existent ID',
        tool: 'Playwright',
        status: 'NO RUN'
    },
    {
        id: 'TC_PUT_001',
        description: 'Full Update of an Existing Booking with Valid Authorisation',
        tool: 'Playwright',
        status: 'NO RUN'
    },
    {
        id: 'TC_PUT_002',
        description: 'Security Verification - Unauthorised Update Attempt',
        tool: 'Playwright',
        status: 'NO RUN'
    }
];

export default function ShowcasesPage() {
    const [isExpanded,
        setIsExpanded
    ] = useState(false);

    return (
        <div className="main-content">
            <h1>QA Showcases - API Automation</h1>
            <p className="intro-text">A selection of projects demonstrating automated testing capabilities.</p>

            {!isExpanded ? (
                <div className="project-summary-card" onClick={() => setIsExpanded(true)}>
                    <h2>Restful Booker</h2>
                    <span className="expand-indicator">Explore Test Results &rarr;</span>
                </div>
            ) : (
                <div className="expanded-view">
                    <button className="back-btn" onClick={() => setIsExpanded(false)}>
                        &larr; Back to Summary
                    </button>

                    <div className="table-container">
                        <h2>Test Execution</h2>
                        <p>A sample of tracked test cases and their most recent execution statuses.</p>

                        <table className="table">

                            <thead>
                                <tr>
                                    <th>Test Case No.</th>
                                    <th>Description</th>
                                    <th>Tool</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {testCases.map((tc) => (
                                    <tr key={tc.id}>
                                        <td>{tc.id}</td>
                                        <td>{tc.description}</td>
                                        <td>{tc.tool}</td>
                                        <td>
                                            <span className={`status-badge ${tc.status === 'PASS' ? 'status-pass'
                                                : tc.status === 'NO RUN' ? 'status-norun'
                                                    : 'status-fail'
                                                }`}>{tc.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}


import React from "react";

class ReportDetails extends React.Component {
  constructor(props) {
    super(props);
    //console.log("hehehj report de");
  }
  render() {
    const { user } = this.props;
    // console.log(user, "user.....");
    return (
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Report Id</th>
              <th>ReportName</th>
              <th>UserName</th>
              <th>DateStarted</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {user.map((data, key) => (
              <tr key={key}>
                <td>{data.reportId}</td>
                <td>{data.reportName}</td>
                <td>{data.userName}</td>
                <td>{data.dateStarted}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ReportDetails;

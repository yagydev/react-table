import React from "react";
import { connect } from "react-redux";
import Pagination from "./Pagination";
import ReportDetails from "./ReportDetails";
import { Dropdown, Input } from "semantic-ui-react";
import { getFilteredArray, searchingData } from "../utils/commonUtils";

class UserDeatils extends React.Component {
  constructor(props) {
    super(props);
    let { user } = this.props;
    this.state = {
      allCountries: user,
      tempAllContries: user,
      currentCountries: [],
      currentPage: null,
      totalPages: null,
      searchvalue: "",
      friendOptions: [
        { key: "1", value: "30", text: "30 days" },
        { key: "2", value: "60", text: "60 days" },
        { key: "3", value: "90", text: "90 days" },
        { key: "4", value: "120", text: "120 days" }
      ]
    };
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {}

  onPageChanged = data => {
    const { tempAllContries } = this.state;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentCountries = tempAllContries.slice(offset, offset + pageLimit);
    this.setState({ currentPage, currentCountries, totalPages });
  };

  onChange = (e, data) => {
    const { allCountries } = this.state;
    let tempContries = getFilteredArray(data.value, allCountries);
    this.setState({ tempAllContries: tempContries });
  };
  onSearch = e => {
    this.setState({ searchvalue: e.target.value });
    let { searchvalue, allCountries } = this.state;
    debugger;
    let searchData = searchingData(allCountries, e.target.value, "reportName");
    const _currentCountries = searchData.slice(0, 0 + 10);

    this.setState({
      tempAllContries: searchData,
      currentCountries: _currentCountries
    });
    console.log(this.state.searchvalue, "sortingDate.s..", searchData.length);
  };
  render() {
    const {
      currentCountries,
      tempAllContries,
      friendOptions,
      searchvalue
    } = this.state;
    const totalCountries = tempAllContries.length;

    let reportDetails, paginations;
    if (tempAllContries.length > 0) {
      paginations = null;
      reportDetails = <ReportDetails user={currentCountries} />;
      paginations = (
        <Pagination
          totalRecordsValue={totalCountries}
          totalRecords={tempAllContries.length}
          pageLimit={10}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
        />
      );
    }

    return (
      <div className="container">
        <Dropdown
          placeholder="Select Filter"
          onChange={this.onChange}
          selection
          options={friendOptions}
        />
        <Input
          placeholder="Search..."
          value={searchvalue}
          onChange={e => this.onSearch(e)}
        />
        {reportDetails}
        {paginations}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user,
    treeData: state.treeData
  };
}
export default connect(mapStateToProps)(UserDeatils);

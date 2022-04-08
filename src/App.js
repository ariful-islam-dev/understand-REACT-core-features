import React from "react";
import { Col, Container, Row } from "reactstrap";
import shortid from "shortid";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import polls from "./data/polls";
class App extends React.Component {
  state = {
    polls: [],
    selectedPoll: {},
    searchTerm: "",
  };

  componentDidMount() {
    this.setState({ polls: polls });
  }

  addNewPoll = (poll) => {
    poll.id = shortid.generate();
    poll.created = new Date();
    poll.totalVote = 0;
    poll.opinions = [];

    this.setState({
      polls: this.state.polls.concat(poll),
    });
  };

  updatePoll = (updatedPoll) => {
    const polls = [...this.state.polls];
    const poll = polls.find((p) => p.id === updatedPoll.id);

    poll.title = updatedPoll.title;
    poll.description = updatedPoll.description;
    poll.opinions = updatedPoll.opinions;

    this.setState({ polls });
  };

  deletePoll = (pollId) => {
    const polls = this.state.polls.filter((p) => p.id !== pollId);
    this.setState({ polls, selectedPoll: {} });
  };

  selectPoll = (pollId) => {
    const poll = this.state.polls.find((p) => p.id === pollId);
    this.setState({ selectedPoll: poll });
  };

  handleSearch = (searchTerm) => {};

  getOpinion = (response) => {
    const { polls } = this.state;
    const poll = polls.find((p) => p.id === response.pollId);
    const option = poll.opinions.find((o) => o.id === response.selectedPoll);

    poll.totalVote++;
    option.vote++;
    const opinion = {
      id: shortid.generate(),
      name: response.name,
      selectedOption: response.selectedOption,
    };

    poll.opinions.push(opinion)
    this.setState({polls})
  };

  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Sidebar
              polls={this.state.polls}
              searchTerm={this.state.searchTerm}
              handleSearch={this.handleSearch}
              selectPoll={this.selectPoll}
              addNewPoll={this.addNewPoll}
            />
          </Col>
          <Col md={8}>
            <MainContent
              poll={this.state.selectedPoll}
              getOpinion={this.getOpinion}
              updatePoll={this.updatePoll}
              deletePoll={this.deletePoll}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

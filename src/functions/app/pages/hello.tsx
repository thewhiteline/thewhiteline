import { Component, Fragment } from "react";

export default class extends Component<{ url: any }, {}> {
  public render() {
    return (
      <Fragment>
        <h1>
          Hello,{" "}
          {this.props.url.query.name ? this.props.url.query.name : "world"}!
        </h1>
      </Fragment>
    );
  }
}

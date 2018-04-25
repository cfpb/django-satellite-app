import React from "react";

export default class EfficacyStudyScoreComponent extends React.Component {

    criterionClassNameFor(level) {
        let className = "m-form-field_radio-icon";
        if (this.props.studyScore === undefined) {
            return className;
        }

        let studyScore = this.props.studyScore;
        if (level === "strong" && studyScore.all_essential_yes === true) {
            className = className + " is-active";
        } else if (level === "week" && studyScore.all_essential_yes === false) {
            className = className + " is-active";
        }

        return className;
    }

    render() {
        if (this.props.studyScore !== undefined && this.props.studyScore.answered_all_complete) {
            return (
                <React.Fragment>
                <h4 className="h2">Score for {this.props.studyScoreName}</h4>
                <div className="m-curriculum-status">
                    <ul className="m-list__unstyled u-mb0">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("strong")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className="m-form-field_radio-text is-active">
                                        <div><strong>The study is strong.</strong></div>
                                        All essential components were met.
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className={this.criterionClassNameFor("week")} viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div className="m-form-field_radio-text">
                                        <div><strong>The study is not strong.</strong></div>
                                        Not all essential components were met.
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Total number of essential components</b></p>
                        <ul className="m-component-list">
                        <li><b>{this.props.studyScore.essential_total_yes}</b> Yes</li>
                        <li><b>{this.props.studyScore.essential_total_no}</b> No</li>
                        </ul>
                        <p><b>Total number of beneficial components</b></p>
                        <ul className="m-component-list">
                            <li><b>{this.props.studyScore.beneficial_total_yes}</b> Yes</li>
                            <li><b>{this.props.studyScore.beneficial_total_no}</b> No</li>
                        </ul>
                    </div>
                </div>
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
}
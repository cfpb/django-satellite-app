import React from "react";

import C from "../../../constants";
import SaveWorkModal from "../../dialogs/SaveWorkModal";

export default class ContentHighSummaryPage extends React.Component {
    changeCriterionAnswer(key, checkedValue) {
        this.props.changeCriterionAnswer(C.CONTENT_PAGE, key, checkedValue);
    }

    render() {
        return (
            <React.Fragment>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h2 className="h1">
                    <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M379.9 493.6c-.7 0-1.5 0-2.2-.1-.7 0-1.5-.1-2.2-.2s-1.5-.2-2.2-.3c-.7-.1-1.5-.2-2.2-.4-.7-.1-1.4-.3-2.2-.5l-2.1-.6c-.7-.2-1.4-.4-2.1-.7-.7-.2-1.4-.5-2.1-.8s-1.3-.6-2-.9-1.3-.6-2-1c-.6-.3-1.3-.7-1.9-1.1s-1.3-.8-1.9-1.2c-.6-.4-1.2-.8-1.8-1.3-.6-.4-1.2-.9-1.8-1.4-.6-.5-1.1-.9-1.7-1.4-.5-.5-1.1-1-1.6-1.5s-1-1.1-1.5-1.6-1-1.1-1.4-1.7c-.5-.6-.9-1.2-1.4-1.7-.4-.6-.9-1.2-1.3-1.8-.4-.6-.8-1.2-1.2-1.9-.4-.6-.7-1.3-1.1-1.9-.3-.6-.7-1.3-1-2s-.6-1.3-.9-2-.5-1.4-.8-2c-.2-.7-.5-1.4-.7-2.1l-.6-2.1c-.2-.7-.3-1.4-.5-2.2-.1-.7-.3-1.4-.4-2.2-.1-.7-.2-1.5-.3-2.2-.1-.7-.1-1.5-.2-2.2 0-.7-.1-1.5-.1-2.2s0-1.5.1-2.2c0-.7.1-1.5.2-2.2s.2-1.5.3-2.2c.1-.7.2-1.4.4-2.2.2-.7.3-1.4.5-2.1l.6-2.1c.2-.7.5-1.4.7-2.1s.5-1.4.8-2.1.6-1.4.9-2c.3-.7.7-1.3 1-2 .3-.6.7-1.3 1.1-1.9s.8-1.3 1.2-1.9c.4-.6.8-1.2 1.3-1.8.4-.6.9-1.2 1.4-1.7.5-.6 1-1.1 1.4-1.7.5-.5 1-1.1 1.5-1.6s1.1-1 1.6-1.5 1.1-1 1.7-1.4c.6-.5 1.2-.9 1.8-1.4.6-.4 1.2-.9 1.8-1.3.6-.4 1.2-.8 1.9-1.2.6-.4 1.3-.7 1.9-1.1.6-.3 1.3-.7 2-1s1.3-.6 2-.9 1.4-.5 2.1-.8c.7-.2 1.4-.5 2.1-.7l2.1-.6c.7-.2 1.4-.3 2.2-.5.7-.1 1.5-.3 2.2-.4s1.5-.2 2.2-.3c.7-.1 1.5-.1 2.2-.2 1.5-.1 3-.1 4.4 0 .7 0 1.5.1 2.2.2s1.5.2 2.2.3c.7.1 1.5.2 2.2.4.7.1 1.4.3 2.2.5l2.1.6c.7.2 1.4.5 2.1.7s1.4.5 2 .8c.7.3 1.4.6 2 .9.7.3 1.3.6 2 1 .6.3 1.3.7 1.9 1.1s1.2.8 1.9 1.2c.6.4 1.2.8 1.8 1.3.6.4 1.2.9 1.8 1.4.6.5 1.1 1 1.7 1.4.5.5 1.1 1 1.6 1.5s1 1.1 1.5 1.6 1 1.1 1.5 1.7.9 1.1 1.4 1.7c.4.6.9 1.2 1.3 1.8.4.6.8 1.2 1.2 1.9.4.6.7 1.3 1.1 1.9.3.6.7 1.3 1 2s.6 1.3.9 2 .5 1.4.8 2.1c.2.7.5 1.4.7 2.1l.6 2.1c.2.7.3 1.4.5 2.1.1.7.3 1.5.4 2.2s.2 1.5.3 2.2c.1.7.1 1.5.2 2.2 0 .7.1 1.5.1 2.2s0 1.5-.1 2.2c0 .7-.1 1.5-.2 2.2s-.2 1.5-.3 2.2c-.1.7-.2 1.5-.4 2.2-.1.7-.3 1.4-.5 2.2l-.6 2.1c-.2.7-.4 1.4-.7 2.1-.2.7-.5 1.4-.8 2-.3.7-.6 1.4-.9 2-.3.7-.6 1.3-1 2-.3.7-.7 1.3-1.1 1.9s-.8 1.3-1.2 1.9c-.4.6-.8 1.2-1.3 1.8-.4.6-.9 1.2-1.4 1.7-.5.6-1 1.1-1.5 1.7s-1 1.1-1.5 1.6-1.1 1-1.6 1.5-1.1 1-1.7 1.4c-.6.5-1.2.9-1.8 1.4-.6.4-1.2.9-1.8 1.3-.6.4-1.2.8-1.9 1.2-.6.4-1.3.7-1.9 1.1-.7.3-1.3.7-2 1s-1.3.6-2 .9-1.4.5-2 .8c-.7.2-1.4.5-2.1.7l-2.1.6c-.7.2-1.4.3-2.2.5-.7.1-1.5.3-2.2.4s-1.5.2-2.2.3c-.7.1-1.5.1-2.2.2-.7.1-1.5.1-2.2.1zM331.6 681.2h329.3v40H331.6z"/><circle cx="380.1" cy="448.8" r="45.2"/><path d="M331.6 782.8h329.3v40H331.6zM331.6 579.5h329.3v40H331.6z"/><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm230.8 794.5c0 11-9 20-20 20H290.3c-11 0-20-9-20-20V312.4c0-11 9-20 20-20l239.2.2v166.3c0 16.8 13.8 30.6 30.6 30.6h171.3l-.6 410.2zm.6-456.5H575.8V292.7l155.5 150.1v.4h.1z"/></svg></span>
                    &nbsp;Content summary
                </h2>
                <p className="lead-paragraph">
                    Review the scores and your notes for each content criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.
                </p>
                <p>Then, review the overall score for the content criteria and enter your thoughts about its strengths and weaknesses.</p>
                <div className="m-notification
                            m-notification__visible
                            m-notification__warning
                            u-mt30
                            u-mb30">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm-49.7 234.6c0-27.6 22.4-50 50-50s50 22.4 50 50v328.6c0 27.6-22.4 50-50 50s-50-22.4-50-50V339.8zm50 582.5c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7S572 811 572 850.6s-32.1 71.7-71.7 71.7z"/></svg>
                    <div className="m-notification_content">
                        <div className="m-notification_message">
                            <h3 className="h4">Your work is saved temporarily.</h3>
                            <p>
                                To save a permanent copy of your results, please print the summary or save it as a PDF.&emsp;
                                <SaveWorkModal
                                    buttonText="Learn more about how to save your work."
                                    hasIcon="false" />
                            </p>
                        </div>
                    </div>
                </div>
                <button className="a-btn">
                    Print or save summary
                </button>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h2>Curriculum information</h2>
                <p><strong>Curriculum title:</strong> {this.props.curriculumTitle}</p>
                <p><strong>Date of publication:</strong> {this.props.publicationDate}</p>
                <p><strong>Grade range:</strong> {this.props.gradeRange}</p>
                <p><strong>Reviewed on:</strong> [today’s date]</p>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <div className="l-survey-top">
                    <button class="a-btn a-btn__link">View or edit responses</button>
                </div>
                <h3>Criterion 1: Earning, income, and careers</h3>
                <p className="u-mb30">The curriculum addresses grade-level appropriate topics for earning, income, and careers.</p>
                <div className="m-curriculum-status">
                    <ul className="m-list__unstyled
                                    u-mb0">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon is-active" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Exceeds</strong></div>
                                        Both components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Meets</strong></div>
                                        1 component was addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Does not meet</strong></div>
                                        0 components were addressed
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m-curriculum-status_components">
                        <p><b>Total number of components</b></p>
                        <ul className="m-component-list">
                            <li><b>5</b> Yes</li>
                            <li><b>0</b> No</li>
                        </ul>
                    </div>
                </div>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="content-crt-notes-1">
                        My notes
                        &nbsp;<small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                            Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input a-text-input__full"
                                rows="6"
                                id="content-crt-notes-1">
                    </textarea>
                </div>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <div className="o-well u-mb30">
                    <h2>
                        <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M379.9 493.6c-.7 0-1.5 0-2.2-.1-.7 0-1.5-.1-2.2-.2s-1.5-.2-2.2-.3c-.7-.1-1.5-.2-2.2-.4-.7-.1-1.4-.3-2.2-.5l-2.1-.6c-.7-.2-1.4-.4-2.1-.7-.7-.2-1.4-.5-2.1-.8s-1.3-.6-2-.9-1.3-.6-2-1c-.6-.3-1.3-.7-1.9-1.1s-1.3-.8-1.9-1.2c-.6-.4-1.2-.8-1.8-1.3-.6-.4-1.2-.9-1.8-1.4-.6-.5-1.1-.9-1.7-1.4-.5-.5-1.1-1-1.6-1.5s-1-1.1-1.5-1.6-1-1.1-1.4-1.7c-.5-.6-.9-1.2-1.4-1.7-.4-.6-.9-1.2-1.3-1.8-.4-.6-.8-1.2-1.2-1.9-.4-.6-.7-1.3-1.1-1.9-.3-.6-.7-1.3-1-2s-.6-1.3-.9-2-.5-1.4-.8-2c-.2-.7-.5-1.4-.7-2.1l-.6-2.1c-.2-.7-.3-1.4-.5-2.2-.1-.7-.3-1.4-.4-2.2-.1-.7-.2-1.5-.3-2.2-.1-.7-.1-1.5-.2-2.2 0-.7-.1-1.5-.1-2.2s0-1.5.1-2.2c0-.7.1-1.5.2-2.2s.2-1.5.3-2.2c.1-.7.2-1.4.4-2.2.2-.7.3-1.4.5-2.1l.6-2.1c.2-.7.5-1.4.7-2.1s.5-1.4.8-2.1.6-1.4.9-2c.3-.7.7-1.3 1-2 .3-.6.7-1.3 1.1-1.9s.8-1.3 1.2-1.9c.4-.6.8-1.2 1.3-1.8.4-.6.9-1.2 1.4-1.7.5-.6 1-1.1 1.4-1.7.5-.5 1-1.1 1.5-1.6s1.1-1 1.6-1.5 1.1-1 1.7-1.4c.6-.5 1.2-.9 1.8-1.4.6-.4 1.2-.9 1.8-1.3.6-.4 1.2-.8 1.9-1.2.6-.4 1.3-.7 1.9-1.1.6-.3 1.3-.7 2-1s1.3-.6 2-.9 1.4-.5 2.1-.8c.7-.2 1.4-.5 2.1-.7l2.1-.6c.7-.2 1.4-.3 2.2-.5.7-.1 1.5-.3 2.2-.4s1.5-.2 2.2-.3c.7-.1 1.5-.1 2.2-.2 1.5-.1 3-.1 4.4 0 .7 0 1.5.1 2.2.2s1.5.2 2.2.3c.7.1 1.5.2 2.2.4.7.1 1.4.3 2.2.5l2.1.6c.7.2 1.4.5 2.1.7s1.4.5 2 .8c.7.3 1.4.6 2 .9.7.3 1.3.6 2 1 .6.3 1.3.7 1.9 1.1s1.2.8 1.9 1.2c.6.4 1.2.8 1.8 1.3.6.4 1.2.9 1.8 1.4.6.5 1.1 1 1.7 1.4.5.5 1.1 1 1.6 1.5s1 1.1 1.5 1.6 1 1.1 1.5 1.7.9 1.1 1.4 1.7c.4.6.9 1.2 1.3 1.8.4.6.8 1.2 1.2 1.9.4.6.7 1.3 1.1 1.9.3.6.7 1.3 1 2s.6 1.3.9 2 .5 1.4.8 2.1c.2.7.5 1.4.7 2.1l.6 2.1c.2.7.3 1.4.5 2.1.1.7.3 1.5.4 2.2s.2 1.5.3 2.2c.1.7.1 1.5.2 2.2 0 .7.1 1.5.1 2.2s0 1.5-.1 2.2c0 .7-.1 1.5-.2 2.2s-.2 1.5-.3 2.2c-.1.7-.2 1.5-.4 2.2-.1.7-.3 1.4-.5 2.2l-.6 2.1c-.2.7-.4 1.4-.7 2.1-.2.7-.5 1.4-.8 2-.3.7-.6 1.4-.9 2-.3.7-.6 1.3-1 2-.3.7-.7 1.3-1.1 1.9s-.8 1.3-1.2 1.9c-.4.6-.8 1.2-1.3 1.8-.4.6-.9 1.2-1.4 1.7-.5.6-1 1.1-1.5 1.7s-1 1.1-1.5 1.6-1.1 1-1.6 1.5-1.1 1-1.7 1.4c-.6.5-1.2.9-1.8 1.4-.6.4-1.2.9-1.8 1.3-.6.4-1.2.8-1.9 1.2-.6.4-1.3.7-1.9 1.1-.7.3-1.3.7-2 1s-1.3.6-2 .9-1.4.5-2 .8c-.7.2-1.4.5-2.1.7l-2.1.6c-.7.2-1.4.3-2.2.5-.7.1-1.5.3-2.2.4s-1.5.2-2.2.3c-.7.1-1.5.1-2.2.2-.7.1-1.5.1-2.2.1zM331.6 681.2h329.3v40H331.6z"/><circle cx="380.1" cy="448.8" r="45.2"/><path d="M331.6 782.8h329.3v40H331.6zM331.6 579.5h329.3v40H331.6z"/><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm230.8 794.5c0 11-9 20-20 20H290.3c-11 0-20-9-20-20V312.4c0-11 9-20 20-20l239.2.2v166.3c0 16.8 13.8 30.6 30.6 30.6h171.3l-.6 410.2zm.6-456.5H575.8V292.7l155.5 150.1v.4h.1z"/></svg></span>
                        &nbsp;Content overall score
                    </h2>
                    <p className="lead-paragraph">
                        How this curriculum meets the criteria for content:
                    </p>
                    <ul className="m-list__unstyled">
                        <li className="u-mb30">
                            <div className="m-form-field
                                            m-form-field__radio
                                            m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Strong content</strong></div>
                                        All 6 criteria were met, and at least one was exceeded
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                        m-form-field__radio
                                        m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon is-active" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Moderate content</strong></div>
                                        All 6 criteria were met
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="u-mb30">
                            <div className="m-form-field
                                        m-form-field__radio
                                        m-form-field__display">
                                <div className="a-label">
                                    <svg className="m-form-field_radio-icon" viewBox="0 0 22 22">
                                        <circle cx="11" cy="11" r="10" className="m-form-field_radio-icon-stroke"></circle>
                                        <circle cx="11" cy="11" r="7" className="m-form-field_radio-icon-fill"></circle>
                                    </svg>
                                    <div>
                                        <div><strong>Limited content</strong></div>
                                        At least one criterion was not met
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <hr className="hr
                                u-mb45
                                u-mt30" />
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-crt-assets">
                            Assets
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                List the assets for curriculum content
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-crt-assets">
                        </textarea>
                    </div>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-crt-gaps">
                            Gaps
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                List the gaps for curriculum content
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-crt-gaps">
                        </textarea>
                    </div>
                    <div className="m-form-field m-form-field__textarea">
                        <label className="a-label a-label__heading" htmlFor="content-crt-overall-notes">
                            Overall notes
                            &nbsp;<small className="a-label_helper">(optional)</small>
                            <small className="a-label_helper a-label_helper__block">
                                Add any final thoughts about the overall content. Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, phone number, email address, Social Security number, etc.
                            </small>
                        </label>
                        <textarea className="a-text-input a-text-input__full"
                                    rows="6"
                                    id="content-crt-overall-notes">
                        </textarea>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
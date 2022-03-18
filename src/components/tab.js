
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    };

    render() {
        const {
            onClick,
            props: { activeTab, label }, 
        } = this;

        let className = "tab-list-item";

        if (activeTab === label) {
            className += " tab-list-active";
        }
    
        return (
            <li className={className} onClick={onClick}>
                {label}
            </li>
        )
    }
}

class Tabs extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,   
    }

    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        console.log(tab);
        this.setState({ activeTab: tab });
    }

    render() {
        const {
            onClickTabItem,
            props: { children },
            state: { activeTab },
        } = this;

        return (
            <div className="tabs">
                <div className="tab-header">
                    <span className="tab-title">Story</span>
                    <ol className="tab-list">
                    
                        {children.map((child) => {
                            const { label } = child.props;

                            return (
                                <Tab
                                    activeTab = {activeTab}
                                    key={label}
                                    label={label}
                                    onClick={onClickTabItem}
                                />
                            );
                        })}
                    </ol>
                </div>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        )
    }
};

export default Tabs;


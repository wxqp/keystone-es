var React = require('react');

module.exports = React.createClass({
	
	displayName: 'InvalidFieldType',
	
	render: function() {
		return <div className="alert alert-danger">Invalido tipo de campo <strong>{this.props.type}</strong> en <strong>{this.props.path}</strong></div>;
	}
	
});

import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { getFormEvents, selectFieldValue, getPrefix } from 'redux-field'

export const mapStateToProps = createStructuredSelector({
  value: selectFieldValue,
})

export const mapDispatchToProps = (dispatch, ownProps) => (
  bindActionCreators(getFormEvents(getPrefix(ownProps)), dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)

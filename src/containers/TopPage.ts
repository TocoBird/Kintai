import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TopPage } from '@/components/Base';
import { AppState } from '@/redux/reducer';

const mapStateToProps = (state: AppState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(TopPage);

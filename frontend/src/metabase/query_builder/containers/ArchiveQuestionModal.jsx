import React, { Component } from "react";
import { connect } from "react-redux";

import { t } from "ttag";

import Button from "metabase/components/Button";
import Icon from "metabase/components/Icon";
import ModalWithTrigger from "metabase/components/ModalWithTrigger";
import Tooltip from "metabase/components/Tooltip";

import ArchiveModal from "metabase/components/ArchiveModal";

import { archiveQuestion } from "metabase/query_builder/actions";

@connect(
  null,
  { onArchive: archiveQuestion },
)
class ArchiveQuestionModal extends Component {
  render() {
    const { onArchive, onClose } = this.props;
    return (
      <ArchiveModal
        title={t`Archive this question?`}
        message={t`This question will be removed from any dashboards or pulses using it.`}
        onArchive={onArchive}
        onClose={onClose}
      />
    );
  }
}

export default ArchiveQuestionModal;

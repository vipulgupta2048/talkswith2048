import React from 'react';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

interface PwaReloadPopupProps {
  onReload: () => void;
}

export default function PwaReloadPopup({ onReload }: PwaReloadPopupProps): React.ReactElement {
  return (
    <div className={styles.reloadPopup}>
      <div className={styles.reloadPopupInner}>
        <span className={styles.reloadPopupText}>
          {translate({
            id: 'theme.PwaReloadPopup.info',
            message: 'New version available',
            description: 'The text for PWA reload popup',
          })}
        </span>
        <button
          type="button"
          className={styles.reloadButton}
          onClick={onReload}
        >
          {translate({
            id: 'theme.PwaReloadPopup.refreshButtonText',
            message: 'Refresh',
            description: 'The text for PWA reload button',
          })}
        </button>
      </div>
    </div>
  );
}

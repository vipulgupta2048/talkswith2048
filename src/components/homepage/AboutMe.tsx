import React, { FunctionComponent } from "react";
import clsx from "clsx";
import styles from "./AboutMe.module.scss";
import useBaseUrl from '@docusaurus/useBaseUrl';
export interface AboutMeProps {
  descriptionComponent: React.ReactNode;
}

export const AboutMe: FunctionComponent<AboutMeProps> = ({
  descriptionComponent,
}) => {
  return (
    <div className="margin-top--lg">
      <h2>About me</h2>
      <div className="row">
        <div className="col col--6">{descriptionComponent}</div>
        <div className={clsx("col col--5", styles.avatarContainer)}>
          <div className={styles.avatar}>
            {/* <img src={require('../../pages/assets/index/avatar.png')} alt="Avatar" /> */}
            <img src={useBaseUrl('/img/avatar.png')} />
          </div>
        </div>
      </div>
    </div>
  );
};

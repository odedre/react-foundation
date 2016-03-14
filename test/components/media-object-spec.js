import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import { MediaObject, MediaObjectSection } from 'src/components/media-object';
import { HorizontalAlignments } from 'src/utils';

describe('MediaObject component', () => {

  it('sets tag name', () => {
    const component = render(<MediaObject/>);
    expect(component).to.have.tagName('div');
  });

  it('sets class name', () => {
    const component = render(<MediaObject/>);
    expect(component).to.have.className('media-object');
  });

  it('sets custom class name', () => {
    const component = render(<MediaObject className="my-media-object"/>);
    expect(component).to.have.className('my-media-object');
    expect(component).to.not.have.className('media-object');
  });

  it('sets stack for small', () => {
    const component = render(<MediaObject stackForSmall/>);
    expect(component).to.have.className('stack-for-small');
    expect(component).to.not.have.attr('stackForSmall');
  });

});

describe('MediaObjectSection component', () => {

  it('sets tag name', () => {
    const component = render(<MediaObjectSection/>);
    expect(component).to.have.tagName('div');
  });

  it('sets class name', () => {
    const component = render(<MediaObjectSection/>);
    expect(component).to.have.className('media-object-section');
  });

  it('sets custom class name', () => {
    const component = render(<MediaObjectSection className="my-media-object-section"/>);
    expect(component).to.have.className('my-media-object-section');
    expect(component).to.not.have.className('media-object-section');
  });

  it('sets main', () => {
    const component = render(<MediaObjectSection isMain/>);
    expect(component).to.have.className('main-section');
    expect(component).to.not.have.attr('isMain');
  });

  it('sets middle', () => {
    const component = render(<MediaObjectSection isMiddle/>);
    expect(component).to.have.className('middle');
    expect(component).to.not.have.attr('isMiddle');
  });

  it('sets bottom', () => {
    const component = render(<MediaObjectSection isBottom/>);
    expect(component).to.have.className('bottom');
    expect(component).to.not.have.attr('isBottom');
  });

  it('sets alignment', () => {
    const component = render(<MediaObjectSection alignment={HorizontalAlignments.CENTER}/>);
    expect(component).to.have.className('align-self-center');
    expect(component).to.not.have.attr('alignment');
  });

});
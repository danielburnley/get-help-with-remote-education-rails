require "rails_helper"

RSpec.feature "View pages", type: :feature do
  scenario "Navigate to home" do
    visit "/"

    expect(page).to have_text("Get Help with Remote Education")
  end

  scenario "Navigate to device access" do
    visit "/device-access"

    expect(page).to have_text("Device Access")
  end

  scenario "Navigate to statutory obligations" do
    visit "/statutory-obligations"

    expect(page).to have_text("Statutory Obligations")
  end
end

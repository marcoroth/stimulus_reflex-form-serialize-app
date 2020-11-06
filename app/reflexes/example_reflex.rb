# frozen_string_literal: true

class ExampleReflex < ApplicationReflex
  def click
    morph "#time", "#{Time.now}"
  end
end
